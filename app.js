/**
 * Python Exam Portal - Application Logic Engine
 * Controls examination simulation, practice feedback, filters, timer, and score analytics.
 */

// Application State
const state = {
  questions: typeof EXAM_QUESTIONS !== 'undefined' ? EXAM_QUESTIONS : [],
  currentIndex: 0,
  answers: {},          // { questionId: selectedOptionIndex }
  flagged: new Set(),   // Set of question IDs marked for review
  visited: new Set(),   // Set of visited question IDs
  mode: 'exam',         // 'exam' | 'practice' | 'bonus'
  timerSeconds: 150 * 60, // 150 minutes (1 min per question)
  timerInterval: null,
  isSubmitted: false,
  submissionStats: null,
  activeFilterTopic: 'all',
  activeFilterDifficulty: 'all',
  activeFilterType: 'all',
  activeFilterStatus: 'all',
  fontSizeLevel: 1      // 0: small, 1: normal, 2: large
};

// Storage Keys
const STORAGE_KEY = 'py_exam_portal_state_v1';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  initTheme();
  setupEventListeners();
  setupKeyboardShortcuts();
  populateFilterDropdowns();
  startTimer();
  renderCurrentQuestion();
  renderPalette();
  updateProgressStats();
});

// Sound Effects via Web Audio API (Zero external assets required)
const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;
function playTone(freq, type = 'sine', duration = 0.1) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may be suspended until user interaction
  }
}

// Storage Helpers
function saveToStorage() {
  try {
    const serialized = {
      answers: state.answers,
      flagged: Array.from(state.flagged),
      visited: Array.from(state.visited),
      currentIndex: state.currentIndex,
      mode: state.mode,
      timerSeconds: state.timerSeconds,
      isSubmitted: state.isSubmitted,
      submissionStats: state.submissionStats
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  } catch (err) {
    console.warn("Storage save failed:", err);
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.answers) state.answers = parsed.answers;
    if (parsed.flagged) state.flagged = new Set(parsed.flagged);
    if (parsed.visited) state.visited = new Set(parsed.visited);
    if (typeof parsed.currentIndex === 'number' && parsed.currentIndex < state.questions.length) {
      state.currentIndex = parsed.currentIndex;
    }
    if (parsed.mode) state.mode = parsed.mode;
    if (parsed.timerSeconds) state.timerSeconds = parsed.timerSeconds;
    if (parsed.isSubmitted) state.isSubmitted = parsed.isSubmitted;
    if (parsed.submissionStats) state.submissionStats = parsed.submissionStats;
  } catch (err) {
    console.warn("Storage load failed:", err);
  }
}

function resetExam() {
  if (!confirm("Are you sure you want to reset all responses, timer, and progress?")) return;
  state.answers = {};
  state.flagged.clear();
  state.visited.clear();
  state.currentIndex = 0;
  state.timerSeconds = 150 * 60;
  state.isSubmitted = false;
  state.submissionStats = null;
  localStorage.removeItem(STORAGE_KEY);
  renderCurrentQuestion();
  renderPalette();
  updateProgressStats();
  alert("Exam has been reset successfully.");
}

// Theme Handling
function initTheme() {
  const saved = localStorage.getItem('py_exam_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('py_exam_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Font Size Adjuster
function cycleFontSize() {
  state.fontSizeLevel = (state.fontSizeLevel + 1) % 3;
  const sizes = ['14px', '16px', '18px'];
  document.documentElement.style.setProperty('--base-font-size', sizes[state.fontSizeLevel]);
  const btn = document.getElementById('font-size-btn');
  if (btn) btn.innerText = ['A-', 'A', 'A+'][state.fontSizeLevel];
}

// Timer Engine
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    if (state.isSubmitted) return;
    
    if (state.mode === 'exam') {
      if (state.timerSeconds > 0) {
        state.timerSeconds--;
        if (state.timerSeconds === 600) { // 10 min alert
          playTone(880, 'sine', 0.3);
          alert("⚠️ Warning: Only 10 minutes remaining in the exam!");
        }
      } else {
        clearInterval(state.timerInterval);
        alert("⏰ Time is up! Submitting your exam automatically...");
        submitExam();
      }
    } else {
      // Practice / Study mode counts up time spent
      state.timerSeconds++;
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer-display');
  if (!timerEl) return;
  
  const h = Math.floor(state.timerSeconds / 3600);
  const m = Math.floor((state.timerSeconds % 3600) / 60);
  const s = state.timerSeconds % 60;
  
  const pad = (n) => String(n).padStart(2, '0');
  timerEl.innerText = `${h > 0 ? pad(h) + ':' : ''}${pad(m)}:${pad(s)}`;
  
  if (state.mode === 'exam' && state.timerSeconds < 600) {
    timerEl.parentElement.classList.add('warning');
  } else {
    timerEl.parentElement.classList.remove('warning');
  }
}

// Mode Switching
function switchMode(newMode) {
  state.mode = newMode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === newMode);
  });
  
  if (newMode === 'bonus') {
    // Jump straight to Question 121 (first bonus question)
    state.currentIndex = 120;
    document.getElementById('filter-difficulty').value = 'High (Bonus)';
    state.activeFilterDifficulty = 'High (Bonus)';
  } else {
    document.getElementById('filter-difficulty').value = 'all';
    state.activeFilterDifficulty = 'all';
  }
  
  saveToStorage();
  renderCurrentQuestion();
  renderPalette();
  updateProgressStats();
}

// Populate Filters
function populateFilterDropdowns() {
  const topicSelect = document.getElementById('filter-topic');
  if (!topicSelect) return;
  
  const topics = Array.from(new Set(state.questions.map(q => q.topic))).sort();
  topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    topicSelect.appendChild(opt);
  });
}

function getFilteredQuestions() {
  return state.questions.filter(q => {
    if (state.activeFilterTopic !== 'all' && q.topic !== state.activeFilterTopic) return false;
    if (state.activeFilterDifficulty !== 'all' && q.difficulty !== state.activeFilterDifficulty) return false;
    if (state.activeFilterType !== 'all' && q.type !== state.activeFilterType) return false;
    
    if (state.activeFilterStatus !== 'all') {
      const isAnswered = state.answers[q.id] !== undefined;
      const isFlagged = state.flagged.has(q.id);
      if (state.activeFilterStatus === 'answered' && !isAnswered) return false;
      if (state.activeFilterStatus === 'unanswered' && isAnswered) return false;
      if (state.activeFilterStatus === 'flagged' && !isFlagged) return false;
    }
    
    return true;
  });
}

// Render Question
function renderCurrentQuestion() {
  const q = state.questions[state.currentIndex];
  if (!q) return;
  
  state.visited.add(q.id);
  saveToStorage();
  
  // Header badges
  document.getElementById('q-number-badge').innerText = `Question ${q.id} of ${state.questions.length}`;
  document.getElementById('q-topic-badge').innerText = q.topic;
  
  const diffBadge = document.getElementById('q-diff-badge');
  diffBadge.innerText = q.difficulty;
  diffBadge.className = 'badge';
  if (q.difficulty === 'Basic') diffBadge.classList.add('badge-difficulty-basic');
  else if (q.difficulty === 'Medium') diffBadge.classList.add('badge-difficulty-medium');
  else diffBadge.classList.add('badge-difficulty-high');
  
  document.getElementById('q-type-badge').innerText = q.type;
  document.getElementById('q-marks-badge').innerText = q.isBonus ? '+2 Marks [Bonus]' : '+1 Mark';
  
  // Flag button state
  const flagBtn = document.getElementById('btn-mark-review');
  const isFlagged = state.flagged.has(q.id);
  flagBtn.classList.toggle('flagged', isFlagged);
  flagBtn.innerHTML = isFlagged ? '★ Marked for Review' : '☆ Mark for Review';
  
  // Question text
  document.getElementById('q-text').innerText = q.question;
  
  // Code snippet container
  const codeBox = document.getElementById('q-code-container');
  const codeBlock = document.getElementById('q-code-block');
  if (q.code && q.code.trim()) {
    codeBox.style.display = 'block';
    codeBlock.innerText = q.code;
  } else {
    codeBox.style.display = 'none';
    codeBlock.innerText = '';
  }
  
  // Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  const selectedAnswer = state.answers[q.id];
  const isRevealed = state.mode === 'practice' || state.isSubmitted;
  
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((optText, idx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    optDiv.dataset.index = idx;
    
    if (selectedAnswer === idx) {
      optDiv.classList.add('selected');
    }
    
    // In practice mode or review mode, reveal correct/incorrect immediately
    if (isRevealed && selectedAnswer !== undefined) {
      if (idx === q.correctAnswer) {
        optDiv.classList.add('correct-revealed');
      } else if (selectedAnswer === idx) {
        optDiv.classList.add('incorrect-revealed');
      }
    }
    
    optDiv.innerHTML = `
      <div class="option-indicator">${letters[idx]}</div>
      <div class="option-text">${escapeHtml(optText)}</div>
    `;
    
    optDiv.addEventListener('click', () => handleSelectOption(idx));
    optionsContainer.appendChild(optDiv);
  });
  
  // Explanation card (Practice mode or Post-submission review)
  const explanationCard = document.getElementById('explanation-card');
  const explanationContent = document.getElementById('explanation-content');
  if ((isRevealed && selectedAnswer !== undefined) || (state.isSubmitted)) {
    explanationCard.style.display = 'block';
    explanationContent.innerText = q.explanation;
  } else {
    explanationCard.style.display = 'none';
  }
  
  // Navigation button states
  document.getElementById('btn-prev').disabled = state.currentIndex === 0;
  document.getElementById('btn-next').disabled = state.currentIndex === state.questions.length - 1;
  
  renderPalette();
  updateProgressStats();
}

// Option Click Handler
function handleSelectOption(optionIndex) {
  if (state.isSubmitted) return; // Read-only in review
  
  const q = state.questions[state.currentIndex];
  state.answers[q.id] = optionIndex;
  
  if (state.mode === 'practice') {
    if (optionIndex === q.correctAnswer) {
      playTone(660, 'sine', 0.15); // pleasant chime
    } else {
      playTone(220, 'triangle', 0.25); // low buzz
    }
  } else {
    playTone(520, 'sine', 0.05);
  }
  
  saveToStorage();
  renderCurrentQuestion();
  renderPalette();
  updateProgressStats();
}

function clearCurrentAnswer() {
  const q = state.questions[state.currentIndex];
  delete state.answers[q.id];
  saveToStorage();
  renderCurrentQuestion();
  renderPalette();
  updateProgressStats();
}

function toggleFlagCurrentQuestion() {
  const q = state.questions[state.currentIndex];
  if (state.flagged.has(q.id)) {
    state.flagged.delete(q.id);
  } else {
    state.flagged.add(q.id);
  }
  saveToStorage();
  renderCurrentQuestion();
  renderPalette();
}

// Navigation Controls
function goToNextQuestion() {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion();
  }
}

function goToPrevQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderCurrentQuestion();
  }
}

function jumpToQuestion(index) {
  if (index >= 0 && index < state.questions.length) {
    state.currentIndex = index;
    renderCurrentQuestion();
    // On mobile, scroll smoothly to question card
    if (window.innerWidth <= 1024) {
      document.querySelector('.question-container').scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Render Palette
function renderPalette() {
  const grid = document.getElementById('palette-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  const filteredSet = new Set(getFilteredQuestions().map(q => q.id));
  
  state.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.innerText = q.id;
    
    if (q.isBonus) {
      btn.classList.add('bonus-btn');
    }
    
    if (idx === state.currentIndex) {
      btn.classList.add('current');
    }
    
    const isAnswered = state.answers[q.id] !== undefined;
    const isFlagged = state.flagged.has(q.id);
    
    if (isAnswered) btn.classList.add('answered');
    if (isFlagged) btn.classList.add('flagged');
    
    // Dim if doesn't match current filter
    if (!filteredSet.has(q.id)) {
      btn.style.opacity = '0.25';
    } else {
      btn.style.opacity = '1';
    }
    
    btn.addEventListener('click', () => jumpToQuestion(idx));
    grid.appendChild(btn);
  });
}

// Update Top Progress Stats
function updateProgressStats() {
  const answeredCount = Object.keys(state.answers).length;
  const total = state.questions.length;
  
  const statsEl = document.getElementById('stats-summary');
  if (statsEl) {
    statsEl.innerHTML = `
      <span>Answered: <b class="stat-highlight">${answeredCount}</b> / ${total}</span>
      <span>Flagged: <b>${state.flagged.size}</b></span>
    `;
  }
}

// Submission and Analytics
function confirmSubmit() {
  const answeredCount = Object.keys(state.answers).length;
  const total = state.questions.length;
  const unanswered = total - answeredCount;
  
  let msg = `You have answered ${answeredCount} of ${total} questions.`;
  if (unanswered > 0) {
    msg += `\n\n⚠️ Caution: You have ${unanswered} UNANSWERED questions!`;
  }
  msg += "\n\nAre you sure you want to finalize and submit the exam?";
  
  if (confirm(msg)) {
    submitExam();
  }
}

function submitExam() {
  state.isSubmitted = true;
  clearInterval(state.timerInterval);
  
  // Calculate detailed scores
  let totalScore = 0;
  let maxScore = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  
  const topicStats = {};
  const diffStats = { Basic: { c: 0, t: 0 }, Medium: { c: 0, t: 0 }, "High (Bonus)": { c: 0, t: 0 } };
  const typeStats = {};
  
  state.questions.forEach(q => {
    const marks = q.isBonus ? 2 : 1;
    maxScore += marks;
    
    if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
    topicStats[q.topic].total += 1;
    
    if (diffStats[q.difficulty]) diffStats[q.difficulty].t += 1;
    
    if (!typeStats[q.type]) typeStats[q.type] = { correct: 0, total: 0 };
    typeStats[q.type].total += 1;
    
    const userAns = state.answers[q.id];
    if (userAns === undefined) {
      unattemptedCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
      totalScore += marks;
      topicStats[q.topic].correct += 1;
      if (diffStats[q.difficulty]) diffStats[q.difficulty].c += 1;
      typeStats[q.type].correct += 1;
    } else {
      incorrectCount++;
    }
  });
  
  const percentage = ((totalScore / maxScore) * 100).toFixed(1);
  
  state.submissionStats = {
    totalScore,
    maxScore,
    percentage,
    correctCount,
    incorrectCount,
    unattemptedCount,
    topicStats,
    diffStats,
    typeStats,
    timeSpentSeconds: 150 * 60 - state.timerSeconds
  };
  
  saveToStorage();
  showResultsModal();
  renderCurrentQuestion();
  renderPalette();
}

function showResultsModal() {
  const stats = state.submissionStats;
  if (!stats) return;
  
  const modal = document.getElementById('results-modal');
  modal.style.display = 'flex';
  
  document.getElementById('modal-score').innerText = `${stats.totalScore} / ${stats.maxScore}`;
  document.getElementById('modal-percent').innerText = `${stats.percentage}%`;
  
  // Grade classification
  const badge = document.getElementById('modal-grade-badge');
  const pct = parseFloat(stats.percentage);
  if (pct >= 90) {
    badge.innerText = "🌟 Grade A+ (Outstanding Mastery!)";
    badge.style.backgroundColor = "#d1fae5";
    badge.style.color = "#065f46";
  } else if (pct >= 80) {
    badge.innerText = "⭐ Grade A (Excellent Preparation)";
    badge.style.backgroundColor = "#dbeafe";
    badge.style.color = "#1e40af";
  } else if (pct >= 65) {
    badge.innerText = "👍 Grade B (Good - Revise Weak Topics)";
    badge.style.backgroundColor = "#fef3c7";
    badge.style.color = "#92400e";
  } else {
    badge.innerText = "⚠️ Needs Focused Revision Tonight!";
    badge.style.backgroundColor = "#fee2e2";
    badge.style.color = "#991b1b";
  }
  
  document.getElementById('stat-correct').innerText = stats.correctCount;
  document.getElementById('stat-incorrect').innerText = stats.incorrectCount;
  document.getElementById('stat-unattempted').innerText = stats.unattemptedCount;
  
  // Topic Breakdown bars
  const topicContainer = document.getElementById('topic-breakdown-container');
  topicContainer.innerHTML = '';
  Object.keys(stats.topicStats).sort().forEach(topic => {
    const data = stats.topicStats[topic];
    const topicPct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `
      <div style="width: 280px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${topic}">${topic}</div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${topicPct}%;"></div>
      </div>
      <div style="width: 70px; text-align: right; font-weight: 700;">${data.correct}/${data.total} (${topicPct}%)</div>
    `;
    topicContainer.appendChild(row);
  });
}

function closeResultsModal() {
  document.getElementById('results-modal').style.display = 'none';
}

// Copy Code Button
function copyCode() {
  const code = document.getElementById('q-code-block').innerText;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copy-code-btn');
    btn.innerText = "Copied! ✓";
    setTimeout(() => { btn.innerText = "Copy Code"; }, 1500);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Theme & Font
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  document.getElementById('font-size-btn').addEventListener('click', cycleFontSize);
  
  // Mode selection
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });
  
  // Navigation
  document.getElementById('btn-next').addEventListener('click', goToNextQuestion);
  document.getElementById('btn-prev').addEventListener('click', goToPrevQuestion);
  document.getElementById('btn-mark-review').addEventListener('click', toggleFlagCurrentQuestion);
  document.getElementById('btn-clear').addEventListener('click', clearCurrentAnswer);
  document.getElementById('btn-submit-exam').addEventListener('click', confirmSubmit);
  document.getElementById('btn-reset-exam').addEventListener('click', resetExam);
  document.getElementById('copy-code-btn').addEventListener('click', copyCode);
  
  // Modal buttons
  document.getElementById('modal-close-btn').addEventListener('click', closeResultsModal);
  document.getElementById('modal-review-btn').addEventListener('click', closeResultsModal);
  document.getElementById('modal-print-btn').addEventListener('click', () => window.print());
  
  // Filter Dropdowns
  document.getElementById('filter-topic').addEventListener('change', (e) => {
    state.activeFilterTopic = e.target.value;
    renderPalette();
  });
  document.getElementById('filter-difficulty').addEventListener('change', (e) => {
    state.activeFilterDifficulty = e.target.value;
    renderPalette();
  });
  document.getElementById('filter-type').addEventListener('change', (e) => {
    state.activeFilterType = e.target.value;
    renderPalette();
  });
  document.getElementById('filter-status').addEventListener('change', (e) => {
    state.activeFilterStatus = e.target.value;
    renderPalette();
  });
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Avoid interfering if typing in an input
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    
    const key = e.key.toUpperCase();
    if (['1', 'A'].includes(key)) handleSelectOption(0);
    else if (['2', 'B'].includes(key)) handleSelectOption(1);
    else if (['3', 'C'].includes(key)) handleSelectOption(2);
    else if (['4', 'D'].includes(key)) handleSelectOption(3);
    else if (['N', 'ARROWRIGHT'].includes(key)) goToNextQuestion();
    else if (['P', 'ARROWLEFT'].includes(key)) goToPrevQuestion();
    else if (key === 'M') toggleFlagCurrentQuestion();
    else if (key === 'X') clearCurrentAnswer();
  });
}

// Utility: HTML Escaping
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

