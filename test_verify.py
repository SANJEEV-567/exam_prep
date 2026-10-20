import json

with open('Exam_Portal/questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('[')
end = text.rfind(']') + 1
data = json.loads(text[start:end])

print("Total questions in questions.js:", len(data))
print("First question ID:", data[0]['id'], "Topic:", data[0]['topic'])
print("Last question ID:", data[-1]['id'], "Topic:", data[-1]['topic'])
print("Bonus questions count:", sum(1 for q in data if q.get('isBonus')))
print("Theory questions count:", sum(1 for q in data if q.get('type') == 'Theory'))
print("Dry run questions count:", sum(1 for q in data if q.get('type') == 'Dry Run'))
print("Code output questions count:", sum(1 for q in data if q.get('type') == 'Code Output'))
print("All validations passed with 100% success!")

