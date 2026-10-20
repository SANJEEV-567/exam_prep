// Python Exam Portal - Comprehensive Question Bank (150 Questions)
// Generated automatically

const EXAM_QUESTIONS = [
  {
    "id": 1,
    "topic": "05. Python String Operations",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following statements correctly describes the mutability of strings in Python?",
    "code": "text = \"Python\"\ntext[0] = \"J\"",
    "options": [
      "Strings are mutable; the first character will be successfully replaced by 'J'.",
      "Strings are immutable; attempting to modify an index directly raises a TypeError.",
      "Strings are mutable only when defined using double quotes, so it raises a SyntaxError.",
      "The operation converts the string into a list automatically without error."
    ],
    "correctAnswer": 1,
    "explanation": "In Python, strings are immutable data types. Once created, their individual characters cannot be modified, replaced, or deleted in-place. Attempting `text[0] = 'J'` raises a TypeError: 'str' object does not support item assignment. To modify a string, you must construct a new string."
  },
  {
    "id": 2,
    "topic": "05. Python String Operations",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following Python slicing code?",
    "code": "word = \"Python\"\nprint(word[1:5])",
    "options": [
      "Pyth",
      "ytho",
      "yton",
      "Python"
    ],
    "correctAnswer": 1,
    "explanation": "String slicing syntax is `string[start:stop]`. The `start` index is inclusive (index 1 is 'y') and the `stop` index is exclusive (index 5 is 'n', not included). The sliced characters are indices 1, 2, 3, 4 which correspond to 'y', 't', 'h', 'o', giving 'ytho'."
  },
  {
    "id": 3,
    "topic": "05. Python String Operations",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the step-by-step evaluation of negative step slicing in the snippet below. What will be printed?",
    "code": "sample = \"HelloWorld\"\nprint(sample[7:2:-2])",
    "options": [
      "owH",
      "rle",
      "roe",
      "rWl"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace `sample = 'HelloWorld'` with indices:\n0:'H', 1:'e', 2:'l', 3:'l', 4:'o', 5:'W', 6:'o', 7:'r', 8:'l', 9:'d'.\nSlicing with `[start:stop:step]` where start=7, stop=2, step=-2:\n- Starts at index 7 -> 'r'\n- Decrements by 2: index 7 - 2 = 5 -> 'W'\n- Decrements by 2: index 5 - 2 = 3 -> 'l'\n- Next would be 3 - 2 = 1, but stop boundary is 2 (exclusive), so the slice halts.\nThe resulting string is 'rWl'."
  },
  {
    "id": 4,
    "topic": "05. Python String Operations",
    "difficulty": "Medium",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the crucial difference between the `.find()` method and the `.index()` method when searching for a substring that does not exist in a string?",
    "code": "s = \"Semester\"\nres1 = s.find(\"x\")\n# res2 = s.index(\"x\")",
    "options": [
      ".find() returns -1, whereas .index() raises a ValueError.",
      ".find() raises a ValueError, whereas .index() returns -1.",
      ".find() returns False, whereas .index() returns None.",
      "Both methods return -1 when the substring is not found."
    ],
    "correctAnswer": 0,
    "explanation": "In Python, `str.find(sub)` returns -1 if the substring `sub` is not found, making it safe for conditional checks. On the other hand, `str.index(sub)` raises a `ValueError: substring not found` if the target is absent."
  },
  {
    "id": 5,
    "topic": "05. Python String Operations",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following string repetition and concatenation operation?",
    "code": "s = \"Go\" * 3 + \"!\" * 2\nprint(s)",
    "options": [
      "GoGoGo!!",
      "Go*3+!*2",
      "Go!Go!Go!",
      "GoGo!!"
    ],
    "correctAnswer": 0,
    "explanation": "The multiplication operator `*` when applied to a string repeats it. 'Go' * 3 evaluates to 'GoGoGo'. '!' * 2 evaluates to '!!'. The concatenation operator `+` joins them together into 'GoGoGo!!'."
  },
  {
    "id": 6,
    "topic": "05. Python String Operations",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Examine the following code using string cleaning and case transformation methods. What is printed?",
    "code": "raw_data = \"  pYtHoN_cOdInG  \"\ncleaned = raw_data.strip().lower().replace(\"_\", \" \")\nprint(cleaned.title())",
    "options": [
      "Python Coding",
      "Python_coding",
      "python coding",
      "PYTHON CODING"
    ],
    "correctAnswer": 0,
    "explanation": "Step-by-step trace:\n1. `raw_data.strip()` removes leading and trailing whitespace -> 'pYtHoN_cOdInG'\n2. `.lower()` converts all characters to lowercase -> 'python_coding'\n3. `.replace('_', ' ')` substitutes underscore with space -> 'python coding'\n4. `.title()` capitalizes the first letter of each word -> 'Python Coding'."
  },
  {
    "id": 7,
    "topic": "05. Python String Operations",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed when the following code is executed?",
    "code": "phrase = \"banana\"\nprint(phrase.count(\"an\"), phrase.replace(\"a\", \"o\", 2))",
    "options": [
      "2 bonona",
      "2 bono na",
      "3 bonona",
      "2 banana"
    ],
    "correctAnswer": 0,
    "explanation": "`phrase.count('an')` finds non-overlapping occurrences: 'b-an-an-a' contains 2 occurrences. `phrase.replace('a', 'o', 2)` replaces only the first 2 occurrences of 'a' with 'o': index 1 ('b o n a n a') and index 3 ('b o n o n a'). The third 'a' remains unchanged. Result: 2 bonona."
  },
  {
    "id": 8,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following expressions evaluates to True in Python?",
    "code": "print(bool(\"False\"), bool(0), bool([]), bool(\"\"))",
    "options": [
      "bool(\"False\")",
      "bool(0)",
      "bool([])",
      "bool(\"\")"
    ],
    "correctAnswer": 0,
    "explanation": "In Python, any non-empty string is 'truthy', including the string \"False\" (length > 0). Numbers equal to zero (0, 0.0), empty collections ([], (), {}), empty strings (\"\"), and None are all 'falsy' and evaluate to False."
  },
  {
    "id": 9,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What happens when the following code is executed in Python?",
    "code": "result = True or (10 / 0 == 0)\nprint(result)",
    "options": [
      "ZeroDivisionError: division by zero",
      "True",
      "False",
      "SyntaxError"
    ],
    "correctAnswer": 1,
    "explanation": "Python uses short-circuit evaluation for logical operators. For the `or` operator, if the left operand is True, Python does not evaluate the right operand at all because the entire expression is already guaranteed to be True. Thus, `10 / 0` is never executed and no ZeroDivisionError is raised."
  },
  {
    "id": 10,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the chained comparison in Python. What will this code print?",
    "code": "x = 5\nprint(1 < x < 10 == 10)",
    "options": [
      "True",
      "False",
      "TypeError",
      "SyntaxError"
    ],
    "correctAnswer": 0,
    "explanation": "In Python, chained comparisons are evaluated as a conjunction of pairwise comparisons: `1 < x and x < 10 and 10 == 10`. Substituting x = 5:\n1. 1 < 5 -> True\n2. 5 < 10 -> True\n3. 10 == 10 -> True\nSince all parts are True, the entire expression evaluates to True."
  },
  {
    "id": 11,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the key difference between the `==` operator and the `is` operator in Python?",
    "code": "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b, a is b)",
    "options": [
      "`==` compares memory addresses (identity), while `is` compares values (equality).",
      "`==` checks if values are equal, while `is` checks if both references point to the exact same object in memory.",
      "`==` is used for numbers only, while `is` is used for lists and strings.",
      "There is no difference; they are interchangeable aliases."
    ],
    "correctAnswer": 1,
    "explanation": "The equality operator `==` compares the contents/values of two objects, whereas the identity operator `is` verifies whether both operands point to the exact same location in memory (i.e. `id(a) == id(b)`). Here, `a == b` is True (same values), but `a is b` is False (different list objects in heap memory)."
  },
  {
    "id": 12,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following expression considering operator precedence?",
    "code": "result = not False and not True or True and False\nprint(result)",
    "options": [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Operator precedence in Python logical expressions is: `not` (highest) -> `and` -> `or` (lowest).\n1. Evaluate `not`:\n   - `not False` -> True\n   - `not True` -> False\n   Expression becomes: `True and False or True and False`\n2. Evaluate `and` operations:\n   - `True and False` -> False\n   - `True and False` -> False\n   Expression becomes: `False or False`\n3. Evaluate `or`:\n   - `False or False` -> False."
  },
  {
    "id": 13,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Basic",
    "type": "Dry Run",
    "isBonus": false,
    "question": "What will be the output of the membership operations below?",
    "code": "text = \"Python 3.10\"\nprint(\"py\" in text, \"10\" in text, \" \" not in text)",
    "options": [
      "True True False",
      "False True False",
      "False True True",
      "True False True"
    ],
    "correctAnswer": 1,
    "explanation": "1. `\"py\" in text`: Python string membership is strictly case-sensitive. The string contains 'Py', not 'py', so this is False.\n2. `\"10\" in text`: The substring '10' is present at the end, so this is True.\n3. `\" \" not in text`: There is a space between 'Python' and '3.10', so space IS in text; thus `not in` is False.\nResult: False True False."
  },
  {
    "id": 14,
    "topic": "06. Boolean and Logical Expressions",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "In Python, logical operators return the value of one of their operands, not necessarily True or False. What does the following print?",
    "code": "a = \"\"\nb = \"Default\"\nc = \"User\"\nprint(a or b, c and \"Guest\")",
    "options": [
      "Default Guest",
      "True Guest",
      "Default User",
      "True True"
    ],
    "correctAnswer": 0,
    "explanation": "In Python:\n- `x or y`: If x is truthy, returns x; otherwise returns y. Since `a` is \"\" (falsy), it evaluates and returns `b` (\"Default\").\n- `x and y`: If x is falsy, returns x; otherwise evaluates and returns y. Since `c` (\"User\") is truthy, it evaluates and returns the right operand (\"Guest\").\nOutput: Default Guest."
  },
  {
    "id": 15,
    "topic": "07. Input and Output",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the return type of Python's built-in `input()` function regardless of what the user types?",
    "code": "val = input(\"Enter a number: \")\nprint(type(val))",
    "options": [
      "int if only digits are entered, float if a decimal point is present, otherwise str",
      "Always str (string)",
      "Dynamic type inferred at runtime by the Python interpreter",
      "object"
    ],
    "correctAnswer": 1,
    "explanation": "In Python 3, the `input()` function always reads data from standard input as a string (`<class 'str'>`). If a numeric value is needed for arithmetic, it must be explicitly cast using `int()` or `float()`."
  },
  {
    "id": 16,
    "topic": "07. Input and Output",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed by the following code utilizing the `sep` parameter?",
    "code": "print(\"20\", \"10\", \"2026\", sep=\"-\")",
    "options": [
      "20 10 2026",
      "20-10-2026",
      "20102026",
      "-20-10-2026-"
    ],
    "correctAnswer": 1,
    "explanation": "The `sep` parameter in `print()` specifies the string placed between arguments when multiple items are passed. Here, each of the values (\"20\", \"10\", \"2026\") is separated by a hyphen '-', giving '20-10-2026'."
  },
  {
    "id": 17,
    "topic": "07. Input and Output",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following successive `print()` statements?",
    "code": "print(\"Hello\", end=\"***\")\nprint(\"World\", end=\"!\")\nprint()",
    "options": [
      "Hello***World!\n",
      "Hello\nWorld!\n",
      "Hello***\nWorld!\n",
      "Hello World!"
    ],
    "correctAnswer": 0,
    "explanation": "By default, `print()` appends a newline character `\\n` as the `end` parameter. Specifying `end=\"***\"` causes the next print statement to appear immediately on the same line after '***'. Then 'World' and '!' are printed. Finally, `print()` outputs a newline. Result is 'Hello***World!'."
  },
  {
    "id": 18,
    "topic": "07. Input and Output",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the output produced by combining `sep` and `end` in this nested sequence:",
    "code": "print(\"A\", \"B\", sep=\":\", end=\"|\")\nprint(\"C\", \"D\", sep=\":\")",
    "options": [
      "A:B|C:D",
      "A:B\nC:D",
      "A B | C D",
      "A:B|C:D|"
    ],
    "correctAnswer": 0,
    "explanation": "Line 1 outputs 'A:B' (joined with ':') followed immediately by '|' with no newline. Line 2 starts immediately after '|' and outputs 'C:D' (joined with ':') followed by default newline. Result is 'A:B|C:D'."
  },
  {
    "id": 19,
    "topic": "07. Input and Output",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of formatted f-string rounding below?",
    "code": "pi = 3.14159265\nprice = 45\nprint(f\"{pi:.2f} | {price:04d}\")",
    "options": [
      "3.14 | 0045",
      "3.1415 | 4500",
      "3.14 | 45",
      "3.15 | 0045"
    ],
    "correctAnswer": 0,
    "explanation": "In f-string formatting:\n- `:.2f` rounds the float to 2 decimal places: `3.14`.\n- `:04d` formats the integer to a total width of 4 digits, padded with leading zeros: `0045`.\nJoined by ' | ', the output is '3.14 | 0045'."
  },
  {
    "id": 20,
    "topic": "07. Input and Output",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "A student runs the following code and inputs '25.5'. What happens?",
    "code": "age = int(input(\"Enter age: \"))\nprint(age + 1)",
    "options": [
      "It prints 26.5.",
      "It truncates 25.5 to 25 and prints 26.",
      "It raises ValueError: invalid literal for int() with base 10: '25.5'.",
      "It raises a TypeError."
    ],
    "correctAnswer": 2,
    "explanation": "In Python, `int()` cannot directly convert a string containing a decimal point into an integer. Doing so raises a `ValueError`. To parse a decimal string as an integer, one must first convert to float: `int(float(\"25.5\"))`."
  },
  {
    "id": 21,
    "topic": "07. Input and Output",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What does the following f-string print when evaluated?",
    "code": "a = 4\nb = 3\nprint(f\"Result: {a * b + 2}\")",
    "options": [
      "Result: 14",
      "Result: 20",
      "Result: {a * b + 2}",
      "Result: 24"
    ],
    "correctAnswer": 0,
    "explanation": "Expressions inside `{}` in an f-string are evaluated at runtime using standard Python operator precedence. Multiplication `*` has higher precedence than addition `+`: `4 * 3 + 2 = 12 + 2 = 14`. Result: 'Result: 14'."
  },
  {
    "id": 22,
    "topic": "07. Input and Output",
    "difficulty": "Medium",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following lines correctly prints `Name: Alice, Age: 20` using `.format()` syntax?",
    "code": "name = \"Alice\"\nage = 20",
    "options": [
      "print(\"Name: {}, Age: {}\".format(name, age))",
      "print(\"Name: {0}, Age: {1}\".format(name, age))",
      "print(\"Name: {n}, Age: {a}\".format(n=name, a=age))",
      "All of the above are valid and produce the identical output."
    ],
    "correctAnswer": 3,
    "explanation": "All three forms of `.format()` are valid in Python:\n1. Empty braces `{}` match positional arguments sequentially.\n2. Indexed `{0}`, `{1}` match positional arguments by zero-based index.\n3. Named placeholders `{n}`, `{a}` match keyword arguments."
  },
  {
    "id": 23,
    "topic": "08. Conditional Statements",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "In an `if-elif-else` ladder, what happens after the first condition evaluates to True?",
    "code": "score = 85\nif score >= 80:\n    grade = 'A'\nelif score >= 70:\n    grade = 'B'\nelse:\n    grade = 'C'",
    "options": [
      "All subsequent elif conditions are also checked and executed if true.",
      "The corresponding block runs, and the entire remainder of the ladder is skipped.",
      "Only the else block is skipped, but remaining elif conditions are evaluated.",
      "Python throws a warning if more than one condition could be true."
    ],
    "correctAnswer": 1,
    "explanation": "In Python's `if-elif-else` structure, conditions are evaluated sequentially from top to bottom. As soon as one condition evaluates to True, its block of code executes, and the rest of the entire ladder (all remaining elif and else branches) is skipped immediately."
  },
  {
    "id": 24,
    "topic": "08. Conditional Statements",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is printed by the following code with multiple independent `if` statements?",
    "code": "n = 15\nif n % 3 == 0:\n    print(\"Fizz\", end=\"\")\nif n % 5 == 0:\n    print(\"Buzz\", end=\"\")\nif n % 2 == 0:\n    print(\"Even\", end=\"\")",
    "options": [
      "Fizz",
      "Buzz",
      "FizzBuzz",
      "FizzBuzzEven"
    ],
    "correctAnswer": 2,
    "explanation": "Because these are separate, independent `if` statements (not `elif`):\n1. `15 % 3 == 0` is True -> prints 'Fizz'\n2. `15 % 5 == 0` is True -> prints 'Buzz'\n3. `15 % 2 == 0` is False -> does not print 'Even'\nCombined output on the same line: 'FizzBuzz'."
  },
  {
    "id": 25,
    "topic": "08. Conditional Statements",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the nested conditional execution below. What will be the final value of `status`?",
    "code": "age = 19\nhas_id = True\nif age >= 18:\n    if has_id:\n        status = \"Allowed\"\n    else:\n        status = \"ID Required\"\nelse:\n    status = \"Underage\"\nprint(status)",
    "options": [
      "Allowed",
      "ID Required",
      "Underage",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: Outer condition `age >= 18` evaluates `19 >= 18` -> True. We enter the outer block.\nStep 2: Inner condition `if has_id` evaluates `True` -> True. We enter the inner block.\nStep 3: `status` is set to \"Allowed\".\nThe else branches are skipped. Output: 'Allowed'."
  },
  {
    "id": 26,
    "topic": "08. Conditional Statements",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of this Python ternary conditional expression?",
    "code": "marks = 72\nstatus = \"Pass\" if marks >= 50 else \"Fail\"\nprint(status)",
    "options": [
      "Pass",
      "Fail",
      "True",
      "SyntaxError: invalid ternary syntax"
    ],
    "correctAnswer": 0,
    "explanation": "Python's ternary operator syntax is: `<expr1> if <condition> else <expr2>`. Here, `marks >= 50` (72 >= 50) is True, so `<expr1>` (\"Pass\") is evaluated and assigned to `status`."
  },
  {
    "id": 27,
    "topic": "08. Conditional Statements",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Look closely at the indentation in the code below. What is printed?",
    "code": "x = 10\ny = 20\nif x > 15:\n    if y > 15:\n        print(\"A\")\nelse:\n    print(\"B\")",
    "options": [
      "A",
      "B",
      "A and B",
      "Nothing is printed"
    ],
    "correctAnswer": 1,
    "explanation": "The condition `x > 15` is `10 > 15` which is False. Because the `else` block aligns with the outer `if x > 15:` statement, the entire inner block is skipped and the outer `else` block executes, printing 'B'."
  },
  {
    "id": 28,
    "topic": "08. Conditional Statements",
    "difficulty": "Medium",
    "type": "Theory",
    "isBonus": false,
    "question": "Why is the `pass` statement necessary in the code below?",
    "code": "x = 5\nif x == 5:\n    # TODO: Implement later\n    pass\nelse:\n    print(\"Not five\")",
    "options": [
      "Without `pass`, Python raises an IndentationError because an empty code block is syntactically invalid.",
      "Without `pass`, the code enters an infinite loop.",
      "`pass` automatically assigns None to the condition.",
      "`pass` forces the execution of the else block."
    ],
    "correctAnswer": 0,
    "explanation": "Python uses indentation to define code blocks. An `if` statement expects an indented suite of code. A comment does not count as a statement. If the block is empty, Python raises an `IndentationError: expected an indented block`. `pass` acts as a null statement (no-op) to satisfy syntax requirements."
  },
  {
    "id": 29,
    "topic": "08. Conditional Statements",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of this nested conditional ternary expression?",
    "code": "num = 0\nresult = \"Positive\" if num > 0 else (\"Zero\" if num == 0 else \"Negative\")\nprint(result)",
    "options": [
      "Positive",
      "Zero",
      "Negative",
      "SyntaxError"
    ],
    "correctAnswer": 1,
    "explanation": "1. `num > 0` (0 > 0) is False, so Python evaluates the expression after `else`.\n2. The else expression is `\"Zero\" if num == 0 else \"Negative\"`.\n3. `num == 0` (0 == 0) is True, so it evaluates to \"Zero\".\nResult is 'Zero'."
  },
  {
    "id": 30,
    "topic": "08. Conditional Statements",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Examine the following condition header with non-boolean values. What is printed?",
    "code": "items = [0]\nif items:\n    if items[0]:\n        print(\"Inner\")\n    else:\n        print(\"Zero element\")\nelse:\n    print(\"Empty list\")",
    "options": [
      "Inner",
      "Zero element",
      "Empty list",
      "TypeError"
    ],
    "correctAnswer": 1,
    "explanation": "1. `if items:` checks the list `[0]`. A list containing elements (even if the element is 0) is non-empty, which is TRUTHY. So we enter the outer block.\n2. `if items[0]:` checks `items[0]`, which is the integer `0`. In Python, `0` is FALSY.\n3. Thus, the inner `if` is False and its `else` branch executes, printing 'Zero element'."
  },
  {
    "id": 31,
    "topic": "08. Conditional Statements",
    "difficulty": "Basic",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "Which of the following lines contains a SyntaxError in Python conditional statements?",
    "code": "# Option A: if x == 10:\n# Option B: elif x = 10:\n# Option C: else:\n# Option D: if not x:",
    "options": [
      "if x == 10:",
      "elif x = 10:",
      "else:",
      "if not x:"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, `=` is the assignment operator, not the comparison operator. Conditional statements require an expression that can be evaluated to a boolean. Writing `elif x = 10:` raises `SyntaxError: invalid syntax` (or cannot use assignment in expression without walrus operator `:=`)."
  },
  {
    "id": 32,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "In the IPO (Input-Process-Output) model of problem solving, which component corresponds to performing arithmetic calculations, comparisons, and logic execution?",
    "code": "User Data ---> [ ? ] ---> Displayed Result",
    "options": [
      "Input",
      "Process",
      "Output",
      "Storage"
    ],
    "correctAnswer": 1,
    "explanation": "In the IPO model:\n- **Input**: Gathering data from the user or external source.\n- **Process**: Manipulating, computing, calculating, comparing, or sorting the input data.\n- **Output**: Presenting the results or findings to the user or system."
  },
  {
    "id": 33,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which geometric shape in standard flowcharts is used to represent a decision or conditional test (such as `is N > 0?`)?",
    "code": "Shape Options:\n1. Oval\n2. Parallelogram\n3. Diamond (Rhombus)\n4. Rectangle",
    "options": [
      "Oval / Rounded Rectangle",
      "Parallelogram",
      "Diamond (Rhombus)",
      "Rectangle"
    ],
    "correctAnswer": 2,
    "explanation": "Standard flowchart shapes:\n- **Oval / Ellipse**: Start / Stop / Terminator\n- **Parallelogram**: Input / Output\n- **Rectangle**: Process / Calculation / Assignment\n- **Diamond (Rhombus)**: Decision / Condition (has two exit paths: True/False or Yes/No)\n- **Arrow**: Flowline connecting steps."
  },
  {
    "id": 34,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Medium",
    "type": "Pseudo Code",
    "isBonus": false,
    "question": "Trace the execution of this pseudocode. What is the final value of Total displayed?",
    "code": "START\n  SET Total = 0\n  SET K = 1\n  WHILE K <= 4 DO\n    SET Total = Total + (K * 2)\n    SET K = K + 1\n  ENDWHILE\n  DISPLAY Total\nEND",
    "options": [
      "10",
      "20",
      "8",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "Trace table:\n- Initially: Total = 0, K = 1\n- Iteration 1: K=1 <= 4 -> Total = 0 + (1*2) = 2, K becomes 2\n- Iteration 2: K=2 <= 4 -> Total = 2 + (2*2) = 6, K becomes 3\n- Iteration 3: K=3 <= 4 -> Total = 6 + (3*2) = 12, K becomes 4\n- Iteration 4: K=4 <= 4 -> Total = 12 + (4*2) = 20, K becomes 5\n- Iteration 5: K=5 <= 4 is False. Loop terminates.\nFinal Total = 20."
  },
  {
    "id": 35,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "A flowchart has a decision diamond checking `X % 2 == 0`. If X starts at 10 and is divided by 2 repeatedly until X is odd, how many times will the process step `X = X / 2` execute for X = 24?",
    "code": "START -> [X = 24] -> <X % 2 == 0?> --Yes--> [X = X // 2] --loop back\n                                      --No--> [DISPLAY X] -> END",
    "options": [
      "2 times",
      "3 times",
      "4 times",
      "5 times"
    ],
    "correctAnswer": 1,
    "explanation": "Trace:\n- X = 24: 24 % 2 == 0 (Yes) -> X becomes 12 (Execution 1)\n- X = 12: 12 % 2 == 0 (Yes) -> X becomes 6 (Execution 2)\n- X = 6: 6 % 2 == 0 (Yes) -> X becomes 3 (Execution 3)\n- X = 3: 3 % 2 == 0 (No) -> Loop terminates, displays 3.\nThe process executes exactly 3 times."
  },
  {
    "id": 36,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following is NOT a mandatory characteristic of a valid algorithm?",
    "code": "Algorithm properties: Finiteness, Definiteness, Input, Output, Effectiveness...",
    "options": [
      "Finiteness: The algorithm must terminate after a finite number of steps.",
      "Definiteness: Each step must be clear and unambiguous.",
      "Language-dependency: It must be written strictly using Python programming syntax.",
      "Effectiveness: All operations must be sufficiently basic to be executed in practice."
    ],
    "correctAnswer": 2,
    "explanation": "An algorithm is an abstract, step-by-step problem-solving procedure. It is completely independent of any programming language. It can be implemented in Python, C++, Java, or plain English pseudocode."
  },
  {
    "id": 37,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "A programmer wrote an algorithm intended to calculate the average of 5 entered numbers, but got an incorrect answer. What type of error is this?",
    "code": "total = 100\ncount = 5\naverage = total / 4  # Mistakenly divided by 4 instead of 5\nprint(average)",
    "options": [
      "Syntax Error",
      "Logical Error",
      "Runtime Error (ZeroDivisionError)",
      "Indentation Error"
    ],
    "correctAnswer": 1,
    "explanation": "A Logical Error occurs when the code runs without crashing or syntax violations, but produces an incorrect, unexpected result due to a flaw in the programmer's underlying reasoning or algorithm."
  },
  {
    "id": 38,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Medium",
    "type": "Pseudo Code",
    "isBonus": false,
    "question": "Consider this pseudocode segment finding the maximum of three numbers. What happens when A=15, B=20, C=10?",
    "code": "IF A >= B AND A >= C THEN\n  SET Max = A\nELSE IF B >= C THEN\n  SET Max = B\nELSE\n  SET Max = C\nENDIF",
    "options": [
      "Max = 15",
      "Max = 20",
      "Max = 10",
      "Error: Multiple conditions evaluated"
    ],
    "correctAnswer": 1,
    "explanation": "1. `A >= B AND A >= C`: `15 >= 20` is False, so the first condition is False.\n2. `ELSE IF B >= C`: `20 >= 10` is True.\n3. `SET Max = B`, so Max = 20."
  },
  {
    "id": 39,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the primary purpose of creating a Trace Table (Dry Run Table) when designing algorithms?",
    "code": "Step | Variable A | Variable B | Condition | Output",
    "options": [
      "To automatically compile the program into machine code.",
      "To manually track the values of variables step-by-step to test logic and catch bugs before coding.",
      "To measure the hardware memory bandwidth.",
      "To format the source code with proper indentation."
    ],
    "correctAnswer": 1,
    "explanation": "A Trace Table (or dry run table) is a technique used in computer science to test an algorithm by hand. You trace each instruction line-by-line, recording the changing values of variables to ensure the logic works properly under all test cases."
  },
  {
    "id": 40,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the variable swap algorithm below. What are the final values of X and Y?",
    "code": "X = 7\nY = 3\nX = X + Y\nY = X - Y\nX = X - Y",
    "options": [
      "X = 7, Y = 3",
      "X = 3, Y = 7",
      "X = 10, Y = 10",
      "X = 0, Y = 4"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: X = 7 + 3 = 10\nStep 2: Y = 10 - 3 = 7\nStep 3: X = 10 - 7 = 3\nFinal values: X = 3, Y = 7. This is the classic arithmetic variable swap algorithm without using a temporary third variable."
  },
  {
    "id": 41,
    "topic": "09. Introduction to Problem Solving",
    "difficulty": "Basic",
    "type": "Pseudo Code",
    "isBonus": false,
    "question": "Which pseudocode structure represents repetition based on a condition tested at the beginning?",
    "code": "Structure A: IF ... THEN ... ELSE\nStructure B: WHILE <condition> DO ... ENDWHILE\nStructure C: CASE ... OF ... ENDCASE\nStructure D: SEQUENCE",
    "options": [
      "Structure A",
      "Structure B",
      "Structure C",
      "Structure D"
    ],
    "correctAnswer": 1,
    "explanation": "A `WHILE <condition> DO ... ENDWHILE` block is a pre-test loop construct where the boolean condition is evaluated prior to executing the loop body."
  },
  {
    "id": 42,
    "topic": "10. For Loop",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What sequence of integers is generated by `range(5)` in Python?",
    "code": "for i in range(5):\n    print(i, end=\" \")",
    "options": [
      "1, 2, 3, 4, 5",
      "0, 1, 2, 3, 4",
      "0, 1, 2, 3, 4, 5",
      "1, 2, 3, 4"
    ],
    "correctAnswer": 1,
    "explanation": "When `range()` is called with a single argument `range(stop)`, it starts generating numbers from 0 up to `stop - 1` with a default step of 1. Hence, `range(5)` produces 0, 1, 2, 3, 4."
  },
  {
    "id": 43,
    "topic": "10. For Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed when the following `range(start, stop, step)` loop executes?",
    "code": "for num in range(3, 15, 3):\n    print(num, end=\" \")",
    "options": [
      "3 6 9 12 15",
      "3 6 9 12",
      "6 9 12 15",
      "3 7 11 15"
    ],
    "correctAnswer": 1,
    "explanation": "The loop starts at 3, increments by 3, and stops strictly before 15. The values generated are 3, 6, 9, 12. Since 15 equals the stop value, it is excluded."
  },
  {
    "id": 44,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the execution of this reverse `range()` loop. What is the output?",
    "code": "for k in range(10, 2, -3):\n    print(k, end=\" \")",
    "options": [
      "10 7 4 1",
      "10 7 4",
      "10 8 6 4 2",
      "7 4 1"
    ],
    "correctAnswer": 1,
    "explanation": "Start = 10, Step = -3, Stop = 2 (exclusive).\n- Iteration 1: 10\n- Iteration 2: 10 - 3 = 7\n- Iteration 3: 7 - 3 = 4\n- Next would be 4 - 3 = 1, but 1 is less than or equal to stop boundary 2 in descending order. Therefore, it stops.\nOutput: '10 7 4 '."
  },
  {
    "id": 45,
    "topic": "10. For Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output when iterating through a string with a `for` loop?",
    "code": "word = \"Code\"\ncount = 0\nfor ch in word:\n    count += 1\nprint(count)",
    "options": [
      "4",
      "3",
      "1",
      "TypeError: string cannot be iterated"
    ],
    "correctAnswer": 0,
    "explanation": "Strings in Python are iterable sequences. The for loop iterates over each character in \"Code\" ('C', 'o', 'd', 'e') one by one, executing the loop body 4 times, so `count` becomes 4."
  },
  {
    "id": 46,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the total number of iterations and the final value of `total` in this nested loop:",
    "code": "total = 0\nfor i in range(1, 4):\n    for j in range(1, 3):\n        total += i * j\nprint(total)",
    "options": [
      "18",
      "12",
      "24",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "Outer loop `i` runs for 1, 2, 3.\nInner loop `j` runs for 1, 2.\n- For i = 1: j = 1 -> 1*1 = 1; j = 2 -> 1*2 = 2 (Sum: 3)\n- For i = 2: j = 1 -> 2*1 = 2; j = 2 -> 2*2 = 4 (Sum: 6)\n- For i = 3: j = 1 -> 3*1 = 3; j = 2 -> 3*2 = 6 (Sum: 9)\nGrand total: 3 + 6 + 9 = 18."
  },
  {
    "id": 47,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "A student attempts to modify the loop variable `i` inside the loop body to skip an iteration. What happens?",
    "code": "for i in range(5):\n    if i == 2:\n        i = 10\n    print(i, end=\" \")",
    "options": [
      "0 1 10\n(the loop terminates because 10 is beyond range)",
      "0 1 10 3 4",
      "0 1 10 11 12 13",
      "SyntaxError: loop variable cannot be modified"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, modifying the loop control variable `i` inside the loop body only changes its value for the remainder of that current iteration. On the next iteration, the `for` statement retrieves the next value produced by the `range(5)` iterator (which is 3), overriding whatever `i` was set to. Hence, output is '0 1 10 3 4'."
  },
  {
    "id": 48,
    "topic": "10. For Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following loop where `start >= stop` with a positive step?",
    "code": "count = 0\nfor i in range(5, 2):\n    count += 1\nprint(count)",
    "options": [
      "3",
      "0",
      "2",
      "ValueError"
    ],
    "correctAnswer": 1,
    "explanation": "If `start > stop` and `step` is positive (default is +1), the range is empty because it cannot reach the stop value by incrementing. The loop body executes 0 times, and `count` remains 0."
  },
  {
    "id": 49,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the following loop that accumulates values conditionally. What is printed?",
    "code": "s = 0\nfor n in range(1, 10):\n    if n % 3 == 0:\n        s += n\nprint(s)",
    "options": [
      "18",
      "9",
      "45",
      "27"
    ],
    "correctAnswer": 0,
    "explanation": "`range(1, 10)` generates numbers 1 through 9.\nMultiples of 3 in this range: 3, 6, 9.\nSum: 3 + 6 + 9 = 18."
  },
  {
    "id": 50,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is printed by this triangular pattern generation logic?",
    "code": "for r in range(1, 4):\n    print(str(r) * r)",
    "options": [
      "1\n22\n333",
      "1\n12\n123",
      "123\n123\n123",
      "1\n2\n3"
    ],
    "correctAnswer": 0,
    "explanation": "- Row r = 1: `str(1) * 1` -> '1'\n- Row r = 2: `str(2) * 2` -> '22'\n- Row r = 3: `str(3) * 3` -> '333'\nEach print automatically creates a new line."
  },
  {
    "id": 51,
    "topic": "10. For Loop",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following objects CANNOT be directly iterated over using a Python `for` loop?",
    "code": "for item in target: pass",
    "options": [
      "A string: `\"Python\"`",
      "A list: `[1, 2, 3]`",
      "A single integer: `12345`",
      "A range object: `range(10)`"
    ],
    "correctAnswer": 2,
    "explanation": "A single integer is not an iterable in Python. Attempting `for item in 12345:` raises `TypeError: 'int' object is not iterable`. Strings, lists, tuples, dictionaries, sets, and ranges are iterables."
  },
  {
    "id": 52,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace how this loop reverses a string using index traversal. What is the final value of `rev`?",
    "code": "text = \"Exam\"\nrev = \"\"\nfor idx in range(len(text) - 1, -1, -1):\n    rev += text[idx]\nprint(rev)",
    "options": [
      "maxE",
      "Exam",
      "axEm",
      "IndexError"
    ],
    "correctAnswer": 0,
    "explanation": "`len(text)` is 4. Range starts at 3, steps by -1, and stops before -1 (i.e. reaches 0).\n- idx = 3: text[3] = 'm'\n- idx = 2: text[2] = 'a'\n- idx = 1: text[1] = 'x'\n- idx = 0: text[0] = 'E'\nConcatenated together: 'maxE'."
  },
  {
    "id": 53,
    "topic": "10. For Loop",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "How many total asterisks `*` are printed by this code?",
    "code": "total_stars = 0\nfor i in range(4):\n    for j in range(i):\n        total_stars += 1\nprint(total_stars)",
    "options": [
      "6",
      "10",
      "4",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "- For i = 0: `range(0)` runs 0 times.\n- For i = 1: `range(1)` runs 1 time.\n- For i = 2: `range(2)` runs 2 times.\n- For i = 3: `range(3)` runs 3 times.\nTotal stars = 0 + 1 + 2 + 3 = 6."
  },
  {
    "id": 54,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "When does a standard Python `while` loop terminate its execution?",
    "code": "while condition:\n    # body",
    "options": [
      "When the condition evaluates to False.",
      "Only when an explicit `break` keyword is reached.",
      "After a maximum of 1000 iterations automatically.",
      "When the condition becomes True."
    ],
    "correctAnswer": 0,
    "explanation": "A `while` loop is a condition-controlled loop. It repeatedly tests the conditional expression before each iteration. As soon as the condition evaluates to False, loop execution terminates, and control passes to the statement immediately following the loop."
  },
  {
    "id": 55,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following while loop?",
    "code": "count = 1\nwhile count < 5:\n    print(count, end=\" \")\n    count += 2",
    "options": [
      "1 3",
      "1 3 5",
      "2 4",
      "1 2 3 4"
    ],
    "correctAnswer": 0,
    "explanation": "- Iteration 1: count=1 < 5 (True) -> prints 1, count becomes 3\n- Iteration 2: count=3 < 5 (True) -> prints 3, count becomes 5\n- Condition check: count=5 < 5 (False) -> loop halts.\nOutput: '1 3 '."
  },
  {
    "id": 56,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the step-by-step reduction of `n` using integer division `//`. How many times does the loop body execute?",
    "code": "n = 32\nsteps = 0\nwhile n > 1:\n    n //= 2\n    steps += 1\nprint(steps)",
    "options": [
      "4",
      "5",
      "6",
      "32"
    ],
    "correctAnswer": 1,
    "explanation": "Trace:\n- Start: n = 32, steps = 0\n- Iteration 1: n becomes 16, steps = 1\n- Iteration 2: n becomes 8, steps = 2\n- Iteration 3: n becomes 4, steps = 3\n- Iteration 4: n becomes 2, steps = 4\n- Iteration 5: n becomes 1, steps = 5\n- Condition check: n > 1 (1 > 1) is False. Halts.\nTotal steps = 5 (since 2^5 = 32)."
  },
  {
    "id": 57,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "What critical issue exists in the following while loop snippet?",
    "code": "x = 1\nwhile x <= 5:\n    print(x)\n    # forgot: x += 1",
    "options": [
      "SyntaxError: missing increment operator",
      "Infinite Loop: `x` never changes, so `x <= 5` is perpetually True",
      "TypeError: `x` cannot be compared to 5 repeatedly",
      "IndentationError on print"
    ],
    "correctAnswer": 1,
    "explanation": "Because `x` is never updated inside the loop body, its value remains 1 perpetually. The condition `1 <= 5` will always evaluate to True, causing an infinite loop."
  },
  {
    "id": 58,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the number reversal algorithm below. What is printed for `num = 482`?",
    "code": "num = 482\nreversed_num = 0\nwhile num > 0:\n    digit = num % 10\n    reversed_num = reversed_num * 10 + digit\n    num //= 10\nprint(reversed_num)",
    "options": [
      "284",
      "482",
      "14",
      "248"
    ],
    "correctAnswer": 0,
    "explanation": "- Iteration 1: digit = 482 % 10 = 2; reversed_num = 0*10 + 2 = 2; num = 48\n- Iteration 2: digit = 48 % 10 = 8; reversed_num = 2*10 + 8 = 28; num = 4\n- Iteration 3: digit = 4 % 10 = 4; reversed_num = 28*10 + 4 = 284; num = 0\n- num = 0 terminates the loop. Output: 284."
  },
  {
    "id": 59,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of this sentinel-value controlled loop simulation?",
    "code": "inputs = [10, 20, 30, -1, 40]\nidx = 0\ntotal = 0\nwhile inputs[idx] != -1:\n    total += inputs[idx]\n    idx += 1\nprint(total)",
    "options": [
      "60",
      "59",
      "100",
      "99"
    ],
    "correctAnswer": 0,
    "explanation": "The loop reads values sequentially until the sentinel value `-1` is encountered:\n- idx=0: 10 -> total = 10\n- idx=1: 20 -> total = 30\n- idx=2: 30 -> total = 60\n- idx=3: value is -1, condition `inputs[idx] != -1` is False. The loop terminates before adding 40.\nTotal = 60."
  },
  {
    "id": 60,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "When is a `while` loop conceptually preferred over a `for` loop in Python?",
    "code": "# for item in seq: vs while condition:",
    "options": [
      "When the exact number of iterations is known before the loop starts.",
      "When the loop must repeat until a dynamic condition or user event occurs, and the number of repetitions is unknown beforehand.",
      "When iterating over elements of a string or list.",
      "When iterating over a fixed range of integers."
    ],
    "correctAnswer": 1,
    "explanation": "A `for` loop is primarily used for **definite iteration** (when iterating over a known sequence or range). A `while` loop is preferred for **indefinite iteration**, where the loop continues until a specific state or condition changes (e.g. valid user input, game loop, convergence)."
  },
  {
    "id": 61,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "What is the final value of `digit_sum` after this while loop finishes?",
    "code": "n = 918\ndigit_sum = 0\nwhile n > 0:\n    digit_sum += n % 10\n    n //= 10\nprint(digit_sum)",
    "options": [
      "18",
      "9",
      "819",
      "72"
    ],
    "correctAnswer": 0,
    "explanation": "- Iteration 1: 918 % 10 = 8 -> digit_sum = 8, n = 91\n- Iteration 2: 91 % 10 = 1 -> digit_sum = 8 + 1 = 9, n = 9\n- Iteration 3: 9 % 10 = 9 -> digit_sum = 9 + 9 = 18, n = 0\n- Loop ends when n = 0. Output: 18."
  },
  {
    "id": 62,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is printed by this flag-controlled while loop?",
    "code": "keep_going = True\nval = 1\nwhile keep_going:\n    val *= 3\n    if val > 20:\n        keep_going = False\nprint(val)",
    "options": [
      "27",
      "9",
      "81",
      "21"
    ],
    "correctAnswer": 0,
    "explanation": "- Start: val = 1\n- Iteration 1: val = 1*3 = 3 (not > 20)\n- Iteration 2: val = 3*3 = 9 (not > 20)\n- Iteration 3: val = 9*3 = 27 (27 > 20 -> keep_going becomes False)\n- Next condition check tests `keep_going` (False) and terminates.\nFinal value printed: 27."
  },
  {
    "id": 63,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the nested while loop. What is the total count printed?",
    "code": "i = 1\ncount = 0\nwhile i <= 3:\n    j = 1\n    while j <= 2:\n        count += 1\n        j += 1\n    i += 1\nprint(count)",
    "options": [
      "6",
      "5",
      "9",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Outer loop `i` runs 3 times (i = 1, 2, 3). For each outer iteration, the inner loop `j` resets to 1 and runs 2 times (j = 1, 2). Total executions of `count += 1` = 3 * 2 = 6."
  },
  {
    "id": 64,
    "topic": "11. While Loop",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed by this decrementing loop?",
    "code": "k = 5\nwhile k > 0:\n    k -= 2\n    print(k, end=\" \")",
    "options": [
      "3 1 -1",
      "5 3 1",
      "3 1",
      "3 1 0"
    ],
    "correctAnswer": 0,
    "explanation": "- Iteration 1: k=5 > 0 -> k becomes 3, prints '3 '\n- Iteration 2: k=3 > 0 -> k becomes 1, prints '1 '\n- Iteration 3: k=1 > 0 -> k becomes -1, prints '-1 '\n- Next check: k=-1 > 0 is False. Loop halts.\nOutput: '3 1 -1 '."
  },
  {
    "id": 65,
    "topic": "11. While Loop",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the simultaneous updates of `a` and `b` in the while loop below. What is the printed value of `a + b`?",
    "code": "a = 1\nb = 10\nwhile a < b:\n    a += 2\n    b -= 1\nprint(a + b)",
    "options": [
      "14",
      "12",
      "15",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "Trace:\n- Start: a = 1, b = 10\n- Iteration 1: 1 < 10 (True) -> a = 3, b = 9\n- Iteration 2: 3 < 9 (True) -> a = 5, b = 8\n- Iteration 3: 5 < 8 (True) -> a = 7, b = 7\n- Iteration 4: 7 < 7 (False) -> Loop halts.\n`a + b` = 7 + 7 = 14."
  },
  {
    "id": 66,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which version of Python introduced structural pattern matching via the `match-case` statement?",
    "code": "match value:\n    case 1:\n        pass",
    "options": [
      "Python 3.8",
      "Python 3.9",
      "Python 3.10",
      "Python 3.12"
    ],
    "correctAnswer": 2,
    "explanation": "Structural pattern matching with `match` and `case` was introduced in **Python 3.10** under PEP 634, 635, and 636."
  },
  {
    "id": 67,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following basic `match-case` statement?",
    "code": "day_code = 3\nmatch day_code:\n    case 1:\n        print(\"Monday\")\n    case 2:\n        print(\"Tuesday\")\n    case 3:\n        print(\"Wednesday\")\n    case _:\n        print(\"Other day\")",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Other day"
    ],
    "correctAnswer": 2,
    "explanation": "The expression `day_code` evaluates to 3. It checks patterns sequentially: 1 (no), 2 (no), 3 (match!). It executes `print(\"Wednesday\")` and exits the match statement."
  },
  {
    "id": 68,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "In Python's `match-case` statement, what symbol acts as the wildcard (default/catch-all) pattern?",
    "code": "match cmd:\n    case \"start\": pass\n    case [ ? ]: print(\"Unknown\")",
    "options": [
      "`*` (asterisk)",
      "`default:`",
      "`_` (underscore)",
      "`else:`"
    ],
    "correctAnswer": 2,
    "explanation": "In Python `match-case`, the single underscore `_` serves as the wildcard pattern that matches any value without binding it to a variable name, behaving like the `default` case in other languages."
  },
  {
    "id": 69,
    "topic": "12. Match Case",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "What error occurs if the wildcard `case _:` is placed before other case patterns?",
    "code": "match score:\n    case _:\n        print(\"Catch all\")\n    case 100:\n        print(\"Perfect\")",
    "options": [
      "SyntaxError: wildcard makes remaining patterns unreachable",
      "It runs fine and prints 'Catch all'",
      "TypeError: invalid order of execution",
      "RuntimeWarning: unreachable code"
    ],
    "correctAnswer": 0,
    "explanation": "Because `case _:` matches any possible value, any pattern written after it would never be reachable. Python compiler detects this and raises a `SyntaxError: wildcard makes remaining patterns unreachable`."
  },
  {
    "id": 70,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "How does the pipe operator `|` behave inside a `case` pattern?",
    "code": "role = \"Admin\"\nmatch role:\n    case \"Editor\" | \"Author\":\n        print(\"Content Creator\")\n    case \"Admin\" | \"Superuser\":\n        print(\"Privileged Access\")\n    case _:\n        print(\"Standard User\")",
    "options": [
      "Content Creator",
      "Privileged Access",
      "Standard User",
      "SyntaxError: | is bitwise OR only"
    ],
    "correctAnswer": 1,
    "explanation": "In pattern matching, the `|` character acts as an OR pattern. `case \"Admin\" | \"Superuser\":` matches if `role` is either 'Admin' OR 'Superuser'. Output: 'Privileged Access'."
  },
  {
    "id": 71,
    "topic": "12. Match Case",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the evaluation of this `match-case` statement featuring a guard clause (`if`):",
    "code": "number = 14\nmatch number:\n    case n if n < 0:\n        print(\"Negative\")\n    case n if n % 2 == 0 and n > 10:\n        print(\"Even > 10\")\n    case n if n % 2 == 0:\n        print(\"Even <= 10\")\n    case _:\n        print(\"Odd\")",
    "options": [
      "Even > 10",
      "Even <= 10",
      "Negative",
      "Odd"
    ],
    "correctAnswer": 0,
    "explanation": "- Case 1: `n < 0` (14 < 0) is False.\n- Case 2: `n % 2 == 0 and n > 10` (14 % 2 == 0 is True, 14 > 10 is True) -> True.\nExecution enters this block and prints 'Even > 10'."
  },
  {
    "id": 72,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Unlike switch statements in C, C++, or Java, do `match-case` blocks in Python require a `break` statement to prevent fall-through to the next case?",
    "code": "match x:\n    case 1: print(\"One\")\n    case 2: print(\"Two\")",
    "options": [
      "Yes, without `break` it will execute all subsequent cases.",
      "No, Python automatically terminates the match statement after executing the first matching case (no fall-through).",
      "Yes, but only if there is a wildcard case present.",
      "`break` is mandatory in every case block."
    ],
    "correctAnswer": 1,
    "explanation": "In Python `match-case`, there is no fall-through. Once a pattern matches and its body executes, Python immediately leaves the match statement. No `break` statement is required or permitted."
  },
  {
    "id": 73,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "Is pattern matching with string literals case-sensitive? What does this print?",
    "code": "cmd = \"SAVE\"\nmatch cmd:\n    case \"save\":\n        print(\"Lower\")\n    case \"Save\":\n        print(\"Capitalized\")\n    case \"SAVE\":\n        print(\"Upper\")\n    case _:\n        print(\"None\")",
    "options": [
      "Lower",
      "Capitalized",
      "Upper",
      "None"
    ],
    "correctAnswer": 2,
    "explanation": "String pattern matching in Python is strictly case-sensitive. \"SAVE\" only matches the exact literal \"SAVE\", printing 'Upper'."
  },
  {
    "id": 74,
    "topic": "12. Match Case",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "What is the output when matching a 2-element sequence pattern?",
    "code": "point = (0, 7)\nmatch point:\n    case (0, 0):\n        print(\"Origin\")\n    case (0, y):\n        print(f\"On Y-axis at {y}\")\n    case (x, 0):\n        print(f\"On X-axis at {x}\")\n    case (x, y):\n        print(f\"Point at ({x}, {y})\")",
    "options": [
      "Origin",
      "On Y-axis at 7",
      "On X-axis at 0",
      "Point at (0, 7)"
    ],
    "correctAnswer": 1,
    "explanation": "The value is `(0, 7)`. Pattern `(0, 0)` does not match. Pattern `(0, y)` matches because the first element is literal 0, and the variable `y` captures the second element (7). Thus, it prints 'On Y-axis at 7'."
  },
  {
    "id": 75,
    "topic": "12. Match Case",
    "difficulty": "Medium",
    "type": "Theory",
    "isBonus": false,
    "question": "In Python `match-case`, what happens when you write `case status:` where `status` is intended to be a previously defined variable with value 200?",
    "code": "status = 200\ncode = 404\nmatch code:\n    case status:\n        print(\"Matched status:\", status)",
    "options": [
      "It checks if `code == status` (404 == 200) and skips the case.",
      "It binds the variable `status` to the value of `code` (404), matching unconditionally!",
      "It raises a NameError because status is already defined.",
      "It raises a SyntaxError: cannot use variables in case."
    ],
    "correctAnswer": 1,
    "explanation": "This is a famous trap in Python pattern matching! A bare name like `case status:` is treated as a **capture pattern**, NOT a value equality test. It captures whatever value is being matched (404) into the variable name `status`, overwriting it, and matches unconditionally. To match against a constant, you must use dotted names (e.g. `HttpStatus.OK`)."
  },
  {
    "id": 76,
    "topic": "12. Match Case",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the following match-case with a boolean guard?",
    "code": "val = 25\nmatch val:\n    case x if x % 5 == 0 and x % 2 == 0:\n        print(\"Divisible by 10\")\n    case x if x % 5 == 0:\n        print(\"Divisible by 5 only\")\n    case _:\n        print(\"Other\")",
    "options": [
      "Divisible by 10",
      "Divisible by 5 only",
      "Other",
      "SyntaxError"
    ],
    "correctAnswer": 1,
    "explanation": "For val = 25:\n- Case 1: `25 % 5 == 0` (True) and `25 % 2 == 0` (False) -> False.\n- Case 2: `25 % 5 == 0` -> True.\nIt matches Case 2 and prints 'Divisible by 5 only'."
  },
  {
    "id": 77,
    "topic": "12. Match Case",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following is a key advantage of `match-case` over a multi-branch `if-elif-else` block?",
    "code": "# match val: vs if-elif-else",
    "options": [
      "`match-case` executes 100 times faster in all scenarios.",
      "`match-case` can deconstruct and match the shape/structure of complex data (sequences, types, mappings) directly and cleanly.",
      "`match-case` does not require any indentation.",
      "`match-case` can only be used with numbers."
    ],
    "correctAnswer": 1,
    "explanation": "`match-case` is not just a replacement for `switch`; it is a **structural pattern matching** tool. Its primary superpower is destructuring and inspecting the shape, types, and values of complex data structures (tuples, lists, objects) in a concise, declarative syntax."
  },
  {
    "id": 78,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the specific effect of the `break` statement when executed inside a loop?",
    "code": "for i in range(10):\n    if i == 5:\n        break",
    "options": [
      "It skips to the next iteration of the loop.",
      "It terminates the nearest enclosing loop completely and resumes at the next statement outside.",
      "It restarts the loop from index 0.",
      "It exits all nested loops simultaneously."
    ],
    "correctAnswer": 1,
    "explanation": "`break` terminates the execution of the nearest enclosing loop (`for` or `while`) immediately. Program flow resumes at the statement following the loop."
  },
  {
    "id": 79,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "How does `continue` alter loop execution?",
    "code": "for x in items:\n    if condition:\n        continue\n    process(x)",
    "options": [
      "It stops the loop permanently.",
      "It skips the remaining statements in the current iteration and jumps to the next iteration.",
      "It does nothing and allows following code to run.",
      "It repeats the current iteration with the same value."
    ],
    "correctAnswer": 1,
    "explanation": "`continue` immediately skips the remainder of the current loop iteration and moves directly to the next iteration (updating the loop variable or re-evaluating the while condition)."
  },
  {
    "id": 80,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the primary role of the `pass` statement in Python?",
    "code": "def upcoming_feature():\n    pass",
    "options": [
      "It terminates the program cleanly.",
      "It acts as a syntactic null statement (placeholder) that does nothing when executed.",
      "It returns True to the caller.",
      "It passes control to the operating system."
    ],
    "correctAnswer": 1,
    "explanation": "`pass` is a null statement in Python. Nothing happens when it executes. It is used as a placeholder in places where a statement is syntactically required (like empty functions, classes, loops, or if branches)."
  },
  {
    "id": 81,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed by the following loop?",
    "code": "for i in range(1, 6):\n    if i == 4:\n        break\n    print(i, end=\" \")",
    "options": [
      "1 2 3 4 5",
      "1 2 3",
      "1 2 3 4",
      "4 5"
    ],
    "correctAnswer": 1,
    "explanation": "When i = 1, 2, 3: condition is False, prints 1, 2, 3.\nWhen i = 4: `if i == 4` is True -> `break` triggers, immediately terminating the loop before printing 4.\nOutput: '1 2 3 '."
  },
  {
    "id": 82,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What will be printed by this loop with `continue`?",
    "code": "for n in range(1, 6):\n    if n % 2 == 0:\n        continue\n    print(n, end=\" \")",
    "options": [
      "2 4",
      "1 3 5",
      "1 2 3 4 5",
      "1 3"
    ],
    "correctAnswer": 1,
    "explanation": "When n is even (2, 4), `n % 2 == 0` is True, so `continue` skips the `print()` statement.\nWhen n is odd (1, 3, 5), the print executes.\nOutput: '1 3 5 '."
  },
  {
    "id": 83,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Theory",
    "isBonus": false,
    "question": "In Python, when does the `else` block attached to a `for` or `while` loop execute?",
    "code": "for item in sequence:\n    # body\nelse:\n    # when does this run?",
    "options": [
      "Whenever the loop body encounters an error.",
      "Only when the loop finishes its iterations normally without encountering a `break` statement.",
      "Every time the loop finishes an iteration.",
      "Only if the sequence was completely empty from the start."
    ],
    "correctAnswer": 1,
    "explanation": "The `else` clause of a loop executes ONLY when the loop completes all its iterations naturally (exhausts its iterable or while condition evaluates to False). If the loop is terminated prematurely by a `break`, the `else` block is skipped."
  },
  {
    "id": 84,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the execution of this `for-else` block. What is the output?",
    "code": "for x in [10, 20, 30]:\n    if x == 20:\n        print(\"Found\", end=\" \")\n        break\nelse:\n    print(\"Not Found\", end=\" \")\nprint(\"Done\")",
    "options": [
      "Found Done",
      "Found Not Found Done",
      "Not Found Done",
      "Done"
    ],
    "correctAnswer": 0,
    "explanation": "When x = 20, 'Found ' is printed and `break` terminates the loop. Because the loop was exited via `break`, the `else` block is SKIPPED. Execution continues to the outer print, outputting 'Found Done'."
  },
  {
    "id": 85,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "What happens when a `for...else` loop is run on an empty list?",
    "code": "for val in []:\n    if val == 1:\n        break\nelse:\n    print(\"Loop Else Ran\")",
    "options": [
      "Nothing is printed because the loop body never ran.",
      "Loop Else Ran",
      "IndexError",
      "SyntaxError"
    ],
    "correctAnswer": 1,
    "explanation": "Since the sequence `[]` is empty, the loop body runs 0 times. Because no `break` statement was executed, the loop terminated naturally (by exhaustion). Therefore, the `else` block DOES execute and prints 'Loop Else Ran'."
  },
  {
    "id": 86,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of this `while...else` loop?",
    "code": "n = 3\nwhile n > 0:\n    n -= 1\nelse:\n    print(\"Liftoff!\")",
    "options": [
      "Liftoff!",
      "3 2 1 Liftoff!",
      "Nothing is printed",
      "Infinite loop"
    ],
    "correctAnswer": 0,
    "explanation": "The while loop decrements `n` until `n = 0`. At that point, the condition `0 > 0` becomes False. The loop terminates normally without encountering any `break`, so the `else` block executes, printing 'Liftoff!'."
  },
  {
    "id": 87,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the behavior of `break` inside nested loops below. What is printed?",
    "code": "for i in range(1, 3):\n    for j in range(1, 4):\n        if j == 2:\n            break\n        print(f\"{i}{j}\", end=\" \")",
    "options": [
      "11 21",
      "11 12 13 21 22 23",
      "11",
      "11 13 21 23"
    ],
    "correctAnswer": 0,
    "explanation": "- For i = 1: j = 1 -> prints '11 '. j = 2 -> `break` terminates ONLY the inner loop.\n- For i = 2: inner loop starts fresh. j = 1 -> prints '21 '. j = 2 -> `break` terminates inner loop.\nOuter loop completes normally. Output: '11 21 '."
  },
  {
    "id": 88,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "What happens if a `break` statement is written outside of any loop construct?",
    "code": "x = 10\nif x == 10:\n    break",
    "options": [
      "It exits the current Python script cleanly.",
      "SyntaxError: 'break' outside loop",
      "IndentationError",
      "RuntimeError"
    ],
    "correctAnswer": 1,
    "explanation": "`break` and `continue` statements are syntactically only permitted inside loop bodies (`for` or `while`). Using them outside a loop (e.g. directly in an `if` statement or at top-level) produces a `SyntaxError: 'break' outside loop` at compile time."
  },
  {
    "id": 89,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "Trace the interaction of `pass` and `continue` in this loop:",
    "code": "output = \"\"\nfor ch in \"ABxC\":\n    if ch == \"x\":\n        pass\n    output += ch\nprint(output)",
    "options": [
      "ABC",
      "ABxC",
      "AB",
      "x"
    ],
    "correctAnswer": 1,
    "explanation": "`pass` does nothing! When `ch == \"x\"`, the `if` block executes `pass`, and execution proceeds straight down to `output += ch`. Therefore, 'x' IS concatenated. (Had it been `continue`, 'x' would have been skipped). Output: 'ABxC'."
  },
  {
    "id": 90,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Consider this standard prime check algorithm. What does it print for `n = 7`?",
    "code": "n = 7\nfor i in range(2, n):\n    if n % i == 0:\n        print(\"Composite\")\n        break\nelse:\n    print(\"Prime\")",
    "options": [
      "Composite",
      "Prime",
      "Both Composite and Prime",
      "Nothing"
    ],
    "correctAnswer": 1,
    "explanation": "For n = 7, the loop checks divisors 2, 3, 4, 5, 6. None of these divide 7 without remainder (`7 % i == 0` is never True). The `break` is never triggered. When the loop finishes all iterations naturally, the `else` block executes, printing 'Prime'."
  },
  {
    "id": 91,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which of the following summaries accurately compares `break`, `continue`, and `pass`?",
    "code": "Statement Comparison Table",
    "options": [
      "`break` terminates loop, `continue` skips iteration, `pass` does nothing.",
      "`break` skips iteration, `continue` terminates loop, `pass` restarts loop.",
      "`break` exits function, `continue` skips loop, `pass` prints None.",
      "`break` pauses program, `continue` resumes, `pass` halts."
    ],
    "correctAnswer": 0,
    "explanation": "- `break`: Abruptly stops the nearest enclosing loop completely.\n- `continue`: Skips the rest of the current iteration and advances to the next.\n- `pass`: A null operation used as an empty statement placeholder."
  },
  {
    "id": 92,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the primary objective of 'Input Validation' in software development?",
    "code": "user_input = get_data()\nif is_valid(user_input): ...",
    "options": [
      "To speed up the execution of the CPU.",
      "To verify that incoming user data satisfies format, type, and range constraints before processing, preventing crashes and corrupted state.",
      "To automatically encrypt all variables in memory.",
      "To convert all variables to string representations."
    ],
    "correctAnswer": 1,
    "explanation": "Input validation is defensive programming. It ensures that user-supplied input adheres to expected specifications (valid data type, within acceptable range, non-empty) before being utilized in calculations, preventing runtime errors and vulnerabilities."
  },
  {
    "id": 93,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which string method checks if a string consists exclusively of digits (0-9) and contains at least one character?",
    "code": "entry = \"2026\"\nif entry.[ ? ]():\n    val = int(entry)",
    "options": [
      ".isnumber()",
      ".isdigit()",
      ".isint()",
      ".parseable()"
    ],
    "correctAnswer": 1,
    "explanation": "The `.isdigit()` method returns True if all characters in the string are digits and the string is not empty. There is no `.isnumber()` or `.isint()` method in standard Python strings."
  },
  {
    "id": 94,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "Why does `val.isdigit()` return False for the string `\"-25\"` even though -25 is a valid integer?",
    "code": "s = \"-25\"\nprint(s.isdigit())",
    "options": [
      "Because 25 is not a prime number.",
      "Because the leading minus sign `'-'` is a punctuation character, not an ASCII digit.",
      "Because Python does not support negative numbers in strings.",
      "Because isdigit() only works on floating point values."
    ],
    "correctAnswer": 1,
    "explanation": "`.isdigit()` checks if every individual character in the string is a digit. The minus sign `'-'` is a punctuation/symbol character, not a digit (0-9). Hence, `\"-25\".isdigit()` evaluates to False."
  },
  {
    "id": 95,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of these string validation checks?",
    "code": "a = \"Python3\"\nb = \"Hello World\"\nprint(a.isalnum(), b.isalpha())",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "correctAnswer": 0,
    "explanation": "1. `a.isalnum()`: \"Python3\" contains letters and numbers with no spaces or symbols -> True.\n2. `b.isalpha()`: \"Hello World\" contains a space character `\" \"`. Since a space is not an alphabetic letter, `isalpha()` returns False.\nOutput: 'True False'."
  },
  {
    "id": 96,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the standard defensive input validation loop below when inputs provided sequentially are 'abc', '-5', and '18':",
    "code": "test_inputs = [\"abc\", \"-5\", \"18\"]\nidx = 0\nwhile True:\n    val = test_inputs[idx]\n    idx += 1\n    if val.isdigit() and int(val) > 0:\n        accepted = int(val)\n        break\nprint(\"Accepted:\", accepted, \"Attempts:\", idx)",
    "options": [
      "Accepted: 18 Attempts: 3",
      "Accepted: -5 Attempts: 2",
      "Accepted: 18 Attempts: 1",
      "Accepted: abc Attempts: 1"
    ],
    "correctAnswer": 0,
    "explanation": "- Attempt 1 ('abc'): `val.isdigit()` is False -> loop continues.\n- Attempt 2 ('-5'): `val.isdigit()` is False (due to '-') -> loop continues.\n- Attempt 3 ('18'): `val.isdigit()` is True and `18 > 0` is True -> `accepted = 18`, `break` executes.\nOutput: 'Accepted: 18 Attempts: 3'."
  },
  {
    "id": 97,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which Python conditional statement correctly validates that an integer `age` is between 18 and 65 (inclusive)?",
    "code": "# Validate age in range [18, 65]",
    "options": [
      "if 18 <= age <= 65:",
      "if age >= 18 and age <= 65:",
      "if age in range(18, 66):",
      "All of the above correctly validate the inclusive range."
    ],
    "correctAnswer": 3,
    "explanation": "All three methods are valid in Python:\n1. Chained comparison `18 <= age <= 65` is idiomatic Python.\n2. Logical conjunction `age >= 18 and age <= 65` is standard boolean logic.\n3. `age in range(18, 66)` checks integers from 18 to 65 inclusive."
  },
  {
    "id": 98,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "What is the result of sanitizing user input with `.strip().lower()` before validation?",
    "code": "user_response = \"   YeS  \"\ncleaned = user_response.strip().lower()\nis_valid = cleaned in [\"yes\", \"y\"]\nprint(cleaned, is_valid)",
    "options": [
      "yes True",
      "   yes   False",
      "YES True",
      "yes False"
    ],
    "correctAnswer": 0,
    "explanation": "1. `strip()` removes all leading and trailing whitespace -> \"YeS\".\n2. `lower()` converts to lowercase -> \"yes\".\n3. \"yes\" is present in `[\"yes\", \"y\"]`, so `is_valid` is True.\nOutput: 'yes True'."
  },
  {
    "id": 99,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace this login attempt counter. What is printed if the user fails 3 times?",
    "code": "attempts = 0\nmax_attempts = 3\nauthenticated = False\npasswords = [\"wrong1\", \"wrong2\", \"wrong3\"]\nfor pwd in passwords:\n    attempts += 1\n    if pwd == \"admin123\":\n        authenticated = True\n        break\nif not authenticated:\n    print(f\"Account Locked after {attempts} attempts\")",
    "options": [
      "Account Locked after 3 attempts",
      "Account Locked after 4 attempts",
      "Account Locked after 2 attempts",
      "Access Granted"
    ],
    "correctAnswer": 0,
    "explanation": "The loop tests all 3 passwords in order. None match 'admin123'. After 3 iterations, `attempts` is 3, and `authenticated` remains False. The final `if not authenticated:` branch executes, printing 'Account Locked after 3 attempts'."
  },
  {
    "id": 100,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "Why is `int(input())` dangerous if not wrapped in exception handling or preceding validation?",
    "code": "num = int(input(\"Enter integer: \"))",
    "options": [
      "It automatically rounds decimal numbers to the ceiling.",
      "If the user enters letters or symbols (e.g. 'hello'), Python raises an unhandled ValueError and abruptly crashes the program.",
      "It causes an infinite loop in the terminal.",
      "It consumes 100% CPU."
    ],
    "correctAnswer": 1,
    "explanation": "If a user enters non-numeric text like \"abc\" or \"ten\", `int()` cannot parse it and raises a `ValueError: invalid literal for int()`. If unhandled, this fatal exception terminates the script abruptly."
  },
  {
    "id": 101,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the core difference between 'Input Validation' and 'Input Sanitization'?",
    "code": "# Validation vs Sanitization",
    "options": [
      "Validation tests whether input meets rules; Sanitization cleans, modifies, or removes unwanted characters from input.",
      "Validation removes characters; Sanitization checks boolean conditions.",
      "They are exact synonyms with no distinction.",
      "Sanitization is only done for numbers; Validation is only done for strings."
    ],
    "correctAnswer": 0,
    "explanation": "- **Sanitization**: Cleaning/modifying incoming data (e.g. `.strip()` to remove whitespace, stripping HTML tags, removing special characters).\n- **Validation**: Verifying whether data meets acceptance criteria (e.g. age between 1 and 100, valid email format) and rejecting or accepting it."
  },
  {
    "id": 102,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of checking if an input is completely blank or only consists of whitespace?",
    "code": "entry = \"    \\t \\n \"\nis_empty = len(entry.strip()) == 0\nprint(is_empty)",
    "options": [
      "True",
      "False",
      "ValueError",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "The `.strip()` method strips all whitespace characters, including spaces, tabs (`\\t`), and newlines (`\\n`). After stripping, the string becomes empty `\"\"` with `len == 0`. Hence `is_empty` evaluates to True."
  },
  {
    "id": 103,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace this function that validates whether an email string contains both an '@' and a '.' after the '@':",
    "code": "def is_valid_email(email):\n    if \"@\" in email:\n        user, domain = email.split(\"@\", 1)\n        if \".\" in domain and len(user) > 0:\n            return True\n    return False\n\nprint(is_valid_email(\"test@college.edu\"), is_valid_email(\"@college.com\"))",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "correctAnswer": 0,
    "explanation": "For 'test@college.edu':\n- Splits into user='test', domain='college.edu'.\n- '.' is in domain and len(user) is 4 (> 0) -> Returns True.\nFor '@college.com':\n- Splits into user='', domain='college.com'.\n- len(user) > 0 (0 > 0) is False -> Returns False.\nOutput: 'True False'."
  },
  {
    "id": 104,
    "topic": "14. Input Validation",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "Which of the following approaches is the most robust way in Python to validate if a string can be converted to a float (handling negative signs, decimals, and scientific notation)?",
    "code": "# Validate float conversion",
    "options": [
      "Using `s.isdigit()`",
      "Using `try: float(s); is_valid = True; except ValueError: is_valid = False`",
      "Checking if `'.' in s`",
      "Checking `s.isnumeric()`"
    ],
    "correctAnswer": 1,
    "explanation": "`float()` handles negative signs (`-3.14`), decimal points (`0.5`), and scientific notation (`1e-4`), all of which cause `.isdigit()` and `.isnumeric()` to return False. The EAFP (`try...except ValueError`) pattern is the standard, most robust validation idiom in Python."
  },
  {
    "id": 105,
    "topic": "14. Input Validation",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What is the recommended loop pattern to repeatedly prompt a user until they provide a valid menu selection (e.g. '1', '2', or '3')?",
    "code": "# Menu choice loop",
    "options": [
      "Use a `while True:` loop, prompt the user, check if `choice in ['1', '2', '3']`, and execute `break` when valid.",
      "Use a `for i in range(100):` loop and crash if the 100th attempt is reached.",
      "Call the function recursively until the call stack overflows.",
      "Use `if-else` without any loop."
    ],
    "correctAnswer": 0,
    "explanation": "The idiomatic Python pattern for repeated input validation is a `while True:` loop. The user is prompted inside the loop; if the entry passes validation, `break` terminates the loop; otherwise an error message is shown and the loop repeats."
  },
  {
    "id": 106,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "Which Python keyword is used to define a new user-defined function?",
    "code": "[ ? ] calculate_total(price, tax):\n    return price + tax",
    "options": [
      "function",
      "def",
      "fun",
      "define"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, the `def` keyword (short for 'define') is used to define functions."
  },
  {
    "id": 107,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "In the context of Python functions, what is the precise distinction between a 'parameter' and an 'argument'?",
    "code": "def add(x, y): return x + y\nresult = add(10, 20)",
    "options": [
      "`x` and `y` are parameters (variables in definition); `10` and `20` are arguments (actual values passed in call).",
      "`x` and `y` are arguments; `10` and `20` are parameters.",
      "Parameters are only used for return statements; arguments are only for print.",
      "There is no technical difference; both terms mean the exact same thing."
    ],
    "correctAnswer": 0,
    "explanation": "- **Parameter**: A variable declared in the function header parentheses (`def add(x, y):`).\n- **Argument**: The real value or expression passed into the function when calling it (`add(10, 20)`)."
  },
  {
    "id": 108,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What happens when you print the function name without parentheses `()`?",
    "code": "def greet():\n    return \"Hello!\"\n\nprint(greet)",
    "options": [
      "It prints 'Hello!'",
      "It prints a function object representation like `<function greet at 0x...>`",
      "It raises a TypeError",
      "It prints None"
    ],
    "correctAnswer": 1,
    "explanation": "Parentheses `()` are the call operator. Writing `greet()` executes the function and returns its result. Writing `greet` without parentheses refers to the function object itself, printing its memory address representation (e.g. `<function greet at 0x...>`)."
  },
  {
    "id": 109,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the type and output when returning multiple comma-separated values from a function?",
    "code": "def get_dimensions():\n    return 1920, 1080\n\nres = get_dimensions()\nprint(type(res), res)",
    "options": [
      "<class 'list'> [1920, 1080]",
      "<class 'tuple'> (1920, 1080)",
      "<class 'int'> 1920",
      "<class 'set'> {1920, 1080}"
    ],
    "correctAnswer": 1,
    "explanation": "In Python, returning multiple expressions separated by commas automatically packs them into a single `tuple`. Hence `res` is `(1920, 1080)` and `type(res)` is `<class 'tuple'>`."
  },
  {
    "id": 110,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "What does a Python function return if it does not contain an explicit `return` statement, or ends without reaching one?",
    "code": "def show():\n    print(\"Hi\")\n\nx = show()\nprint(x)",
    "options": [
      "0",
      "False",
      "None",
      "Empty string `\"\"`"
    ],
    "correctAnswer": 2,
    "explanation": "In Python, if a function reaches the end of its body without executing a `return` statement (or executes a bare `return` with no argument), it implicitly returns `None`."
  },
  {
    "id": 111,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "What error occurs when calling this function?",
    "code": "def student(name, age, course):\n    print(name, age, course)\n\nstudent(\"John\", age=19, \"CS\")",
    "options": [
      "SyntaxError: positional argument follows keyword argument",
      "TypeError: missing course argument",
      "NameError: CS is undefined",
      "Runs successfully and prints: John 19 CS"
    ],
    "correctAnswer": 0,
    "explanation": "In Python syntax rules, all positional arguments must precede any keyword arguments in a function call. Passing a positional argument (`\"CS\"`) after a keyword argument (`age=19`) causes a compile-time `SyntaxError: positional argument follows keyword argument`."
  },
  {
    "id": 112,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Error Hunt",
    "isBonus": false,
    "question": "Which of the following function definitions causes a `SyntaxError` in Python?",
    "code": "# Option A: def f(a, b=2): pass\n# Option B: def f(a=1, b=2): pass\n# Option C: def f(a=1, b): pass\n# Option D: def f(a, b, c=3): pass",
    "options": [
      "def f(a, b=2): pass",
      "def f(a=1, b=2): pass",
      "def f(a=1, b): pass",
      "def f(a, b, c=3): pass"
    ],
    "correctAnswer": 2,
    "explanation": "In a function definition header, any parameter with a default value must come AFTER all parameters without default values. Writing `def f(a=1, b):` places a non-default parameter (`b`) after a default parameter (`a`), raising `SyntaxError: non-default argument follows default argument`."
  },
  {
    "id": 113,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the execution when keyword arguments are passed in reverse order:",
    "code": "def divide(num, den):\n    return num / den\n\nprint(divide(den=2, num=10))",
    "options": [
      "0.2",
      "5.0",
      "TypeError",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "Keyword arguments match parameters by their name, not by positional order. Even though `den=2` was passed first, `num` is mapped to 10 and `den` to 2. `10 / 2 = 5.0` (float division in Python 3)."
  },
  {
    "id": 114,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the function calls below?",
    "code": "def power(base, exp=2):\n    return base ** exp\n\nprint(power(3), power(2, 3))",
    "options": [
      "9 8",
      "6 6",
      "9 6",
      "8 9"
    ],
    "correctAnswer": 0,
    "explanation": "- `power(3)`: Omits `exp`, so default `exp = 2` is used: 3^2 = 9.\n- `power(2, 3)`: Overrides default with `exp = 3`: 2^3 = 8.\nOutput: '9 8'."
  },
  {
    "id": 115,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "A variable declared inside the body of a function has which type of scope?",
    "code": "def compute():\n    score = 100\n    return score",
    "options": [
      "Global scope (accessible anywhere in the file)",
      "Local scope (accessible only inside `compute()`)",
      "Built-in scope",
      "Module scope"
    ],
    "correctAnswer": 1,
    "explanation": "Variables defined inside a function body belong to the function's **local scope**. They are created when the function is called and destroyed when the function returns. Attempting to access `score` outside the function raises a `NameError`."
  },
  {
    "id": 116,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace the execution of this code using the `global` keyword. What is printed?",
    "code": "count = 0\ndef increment():\n    global count\n    count += 5\n\nincrement()\nincrement()\nprint(count)",
    "options": [
      "0",
      "5",
      "10",
      "UnboundLocalError"
    ],
    "correctAnswer": 2,
    "explanation": "Because `global count` is declared inside `increment()`, assignments to `count` modify the module-level global variable directly rather than creating a local variable. Calling `increment()` twice adds 5 + 5 = 10."
  },
  {
    "id": 117,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Dry Run",
    "isBonus": false,
    "question": "Trace this chain of function calls. What is the value of `final`?",
    "code": "def square(x):\n    return x * x\n\ndef add_five(y):\n    return y + 5\n\nfinal = add_five(square(3))",
    "options": [
      "64",
      "14",
      "11",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "Inner call `square(3)` evaluates first: 3 * 3 = 9.\nOuter call `add_five(9)` receives 9: 9 + 5 = 14.\n`final` = 14."
  },
  {
    "id": 118,
    "topic": "15. Functions",
    "difficulty": "Medium",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is printed by this function demonstrating parameter pass-by-value of immutable integers?",
    "code": "def change_val(num):\n    num = num + 10\n    return num\n\nx = 5\nchange_val(x)\nprint(x)",
    "options": [
      "15",
      "5",
      "10",
      "TypeError"
    ],
    "correctAnswer": 1,
    "explanation": "Integers are immutable in Python. Inside `change_val`, `num` is a local parameter. Assigning `num = num + 10` binds `num` to a new integer (15), leaving the outer variable `x` completely unaffected. Since the return value was not assigned back to `x`, `x` remains 5."
  },
  {
    "id": 119,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Theory",
    "isBonus": false,
    "question": "How can the docstring of a function be inspected programmatically in Python?",
    "code": "def calc():\n    \"\"\"Calculates statistical metric.\"\"\"\n    pass",
    "options": [
      "calc.__comments__",
      "calc.__doc__",
      "doc(calc)",
      "calc.help"
    ],
    "correctAnswer": 1,
    "explanation": "The docstring of a function is stored in its `__doc__` special attribute (accessible via `calc.__doc__`) and is also displayed by the built-in `help(calc)` function."
  },
  {
    "id": 120,
    "topic": "15. Functions",
    "difficulty": "Basic",
    "type": "Code Output",
    "isBonus": false,
    "question": "What is the output of the function below with an early return?",
    "code": "def check_even(n):\n    if n % 2 == 0:\n        return \"Even\"\n    print(\"Processing odd...\")\n    return \"Odd\"\n\nprint(check_even(8))",
    "options": [
      "Processing odd...\nEven",
      "Even",
      "Processing odd...\nOdd",
      "Even\nOdd"
    ],
    "correctAnswer": 1,
    "explanation": "When n = 8, `n % 2 == 0` is True. The statement `return \"Even\"` immediately terminates the function and passes \"Even\" back to the caller. The subsequent `print` and second `return` are never reached."
  },
  {
    "id": 121,
    "topic": "10. For Loop",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the manipulation of the 2D matrix coordinates below. What is the final value of `diagonal_sum`?",
    "code": "matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\ndiagonal_sum = 0\nn = len(matrix)\nfor i in range(n):\n    diagonal_sum += matrix[i][i] + matrix[i][n - 1 - i]\nprint(diagonal_sum)",
    "options": [
      "30",
      "25",
      "35",
      "15"
    ],
    "correctAnswer": 0,
    "explanation": "Let's trace for n = 3:\n- i = 0: matrix[0][0] (= 1) + matrix[0][2] (= 3) -> 1 + 3 = 4\n- i = 1: matrix[1][1] (= 5) + matrix[1][1] (= 5) -> 5 + 5 = 10\n- i = 2: matrix[2][2] (= 9) + matrix[2][0] (= 7) -> 9 + 7 = 16\nTotal diagonal_sum = 4 + 10 + 16 = 30. (Notice that the center element matrix[1][1]=5 is added twice by this specific formula)."
  },
  {
    "id": 122,
    "topic": "10. For Loop",
    "difficulty": "High (Bonus)",
    "type": "Edge Case",
    "isBonus": true,
    "question": "[BONUS] What is the length of `list(range(10, 0, 2))` and what does the loop output?",
    "code": "vals = list(range(10, 0, 2))\nprint(len(vals), vals)",
    "options": [
      "0 []",
      "5 [10, 8, 6, 4, 2]",
      "ValueError: step must be negative",
      "1 [10]"
    ],
    "correctAnswer": 0,
    "explanation": "In `range(start, stop, step)`, if `start > stop` and `step` is positive (+2), the step moves away from the stop value. Python immediately evaluates this as an empty sequence `[]` of length 0 without raising any error."
  },
  {
    "id": 123,
    "topic": "10. For Loop",
    "difficulty": "High (Bonus)",
    "type": "Theory",
    "isBonus": true,
    "question": "[BONUS] In Python, does the loop control variable leak into the surrounding scope after a `for` loop terminates? What is printed?",
    "code": "for x in range(4):\n    pass\nprint(x)",
    "options": [
      "NameError: name 'x' is not defined (loops have block scope)",
      "3",
      "4",
      "None"
    ],
    "correctAnswer": 1,
    "explanation": "Unlike C++ or Java, Python does NOT have block scope for `for` loops or `if` statements! Variables assigned in a `for` loop remain in the enclosing function/global scope. When `range(4)` finishes, the last assigned value to `x` is 3, which persists and prints 3."
  },
  {
    "id": 124,
    "topic": "10. For Loop",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] How many total comparisons `comparisons` are performed in this simulation of Bubble Sort passes?",
    "code": "n = 5\ncomparisons = 0\nfor i in range(n - 1):\n    for j in range(n - 1 - i):\n        comparisons += 1\nprint(comparisons)",
    "options": [
      "10",
      "15",
      "20",
      "12"
    ],
    "correctAnswer": 0,
    "explanation": "For n = 5:\n- i = 0: j in range(4) -> 4 comparisons\n- i = 1: j in range(3) -> 3 comparisons\n- i = 2: j in range(2) -> 2 comparisons\n- i = 3: j in range(1) -> 1 comparison\nTotal = 4 + 3 + 2 + 1 = 10 (which matches n*(n-1)/2 = 5*4/2 = 10)."
  },
  {
    "id": 125,
    "topic": "10. For Loop",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] What is the exact string output of the pyramid pattern logic below?",
    "code": "lines = []\nn = 3\nfor i in range(1, n + 1):\n    spaces = \" \" * (n - i)\n    stars = \"*\" * (2 * i - 1)\n    lines.append(spaces + stars)\nprint(\"|\".join(lines))",
    "options": [
      "  *| ***|*****",
      "*|***|*****",
      " *|***|*****",
      "  * | *** |*****"
    ],
    "correctAnswer": 0,
    "explanation": "- i = 1: spaces = 2 (\"  \"), stars = 1 (\"*\") -> \"  *\"\n- i = 2: spaces = 1 (\" \"), stars = 3 (\"***\") -> \" ***\"\n- i = 3: spaces = 0 (\"\"), stars = 5 (\"*****\") -> \"*****\"\nJoined by '|': \"  *| ***|*****\"."
  },
  {
    "id": 126,
    "topic": "11. While Loop",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the Collatz 3n+1 sequence in this while loop. What is the total step count for `n = 6`?",
    "code": "n = 6\nsteps = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n //= 2\n    else:\n        n = 3 * n + 1\n    steps += 1\nprint(steps)",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Trace for n = 6:\n1. 6 is even -> n = 3 (step 1)\n2. 3 is odd -> n = 3*3 + 1 = 10 (step 2)\n3. 10 is even -> n = 5 (step 3)\n4. 5 is odd -> n = 3*5 + 1 = 16 (step 4)\n5. 16 is even -> n = 8 (step 5)\n6. 8 is even -> n = 4 (step 6)\n7. 4 is even -> n = 2 (step 7)\n8. 2 is even -> n = 1 (step 8)\nn is now 1, loop halts. Total steps = 8."
  },
  {
    "id": 127,
    "topic": "11. While Loop",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] Trace the integer-to-binary conversion algorithm. What is the output for `num = 13`?",
    "code": "num = 13\nbits = \"\"\nwhile num > 0:\n    bits = str(num % 2) + bits\n    num //= 2\nprint(bits)",
    "options": [
      "1101",
      "1011",
      "1110",
      "1100"
    ],
    "correctAnswer": 0,
    "explanation": "- Iteration 1: 13 % 2 = 1, bits = \"1\" + \"\" = \"1\", num = 6\n- Iteration 2: 6 % 2 = 0, bits = \"0\" + \"1\" = \"01\", num = 3\n- Iteration 3: 3 % 2 = 1, bits = \"1\" + \"01\" = \"101\", num = 1\n- Iteration 4: 1 % 2 = 1, bits = \"1\" + \"101\" = \"1101\", num = 0\nLoop terminates. Output: '1101'."
  },
  {
    "id": 128,
    "topic": "11. While Loop",
    "difficulty": "High (Bonus)",
    "type": "Edge Case",
    "isBonus": true,
    "question": "[BONUS] Why does the following while loop fail to terminate as expected and cause an infinite loop in Python?",
    "code": "x = 0.0\nwhile x != 1.0:\n    x += 0.1\n    if x > 1.5: break",
    "options": [
      "Because 0.1 cannot be represented with exact binary precision in IEEE 754 floating point arithmetic, so `x` never equals exactly 1.0000000000000000.",
      "Because Python while loops do not accept floats as conditions.",
      "Because `+=` cannot be used with floating point variables.",
      "Because 0.0 is falsy and halts before starting."
    ],
    "correctAnswer": 0,
    "explanation": "Due to IEEE 754 binary floating-point representation, `0.1` is a recurring binary fraction (like 1/3 in decimal). Adding 0.1 ten times yields `0.9999999999999999` instead of `1.0`. Thus `x != 1.0` remains True until the guard `if x > 1.5: break` rescues it."
  },
  {
    "id": 129,
    "topic": "11. While Loop",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the Euclidean GCD algorithm in the while loop below. What is printed for `a = 48, b = 18`?",
    "code": "a = 48\nb = 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)",
    "options": [
      "6",
      "12",
      "2",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Simultaneous tuple assignment trace:\n- Start: a = 48, b = 18\n- Iteration 1: new a = 18, new b = 48 % 18 = 12\n- Iteration 2: new a = 12, new b = 18 % 12 = 6\n- Iteration 3: new a = 6, new b = 12 % 6 = 0\n- Next check: b == 0, loop terminates.\nFinal value of a = 6 (the greatest common divisor)."
  },
  {
    "id": 130,
    "topic": "11. While Loop",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the two-pointer convergence loop below. What will be the final value of `counter`?",
    "code": "left = 0\nright = 10\ncounter = 0\nwhile left < right:\n    if left % 2 == 0:\n        left += 1\n    else:\n        right -= 2\n    counter += 1\nprint(counter)",
    "options": [
      "6",
      "7",
      "8",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Trace:\n1. left=0, right=10: left is even -> left becomes 1, counter = 1\n2. left=1, right=10: left is odd -> right becomes 8, counter = 2\n3. left=1, right=8: left is odd -> right becomes 6, counter = 3\n4. left=1, right=6: left is odd -> right becomes 4, counter = 4\n5. left=1, right=4: left is odd -> right becomes 2, counter = 5\n6. left=1, right=2: left is odd -> right becomes 0, counter = 6\n7. left=1, right=0: condition `left < right` (1 < 0) is False! Loop halts.\nFinal counter = 6."
  },
  {
    "id": 131,
    "topic": "12. Match Case",
    "difficulty": "High (Bonus)",
    "type": "Theory",
    "isBonus": true,
    "question": "[BONUS] Why does `case TARGET:` in the snippet below match unconditionally, and how can one match against a constant variable properly?",
    "code": "TARGET = 42\nval = 99\nmatch val:\n    case TARGET:\n        print(\"Matched!\")",
    "options": [
      "In Python match-case, any simple variable name in a case is treated as a capture pattern (which binds the matched value to that name). To match a constant, use a dotted name like `config.TARGET` or an `if` guard.",
      "It is a bug in Python 3.10 that was deprecated in Python 3.12.",
      "Because TARGET was written in uppercase letters.",
      "TARGET is interpreted as a keyword."
    ],
    "correctAnswer": 0,
    "explanation": "In Python's structural pattern matching specification, an unadorned identifier like `TARGET` is a **capture pattern**. It dynamically binds the matched expression (`val = 99`) to `TARGET` and evaluates to True regardless of its prior value. To check equality against an existing constant, Python requires a dotted lookup (such as `Constants.TARGET`) or an explicit guard clause (`case x if x == TARGET:`)."
  },
  {
    "id": 132,
    "topic": "12. Match Case",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace sequence pattern unpacking with the rest operator `*rest`. What is printed?",
    "code": "cmd = [\"git\", \"commit\", \"-m\", \"Initial commit\"]\nmatch cmd:\n    case [\"git\", action]:\n        print(f\"Git {action}\")\n    case [\"git\", action, *flags]:\n        print(f\"Action: {action}, Flags: {len(flags)}\")\n    case _:\n        print(\"Unknown command\")",
    "options": [
      "Action: commit, Flags: 2",
      "Git commit",
      "Action: commit, Flags: 3",
      "Unknown command"
    ],
    "correctAnswer": 0,
    "explanation": "The list has 4 elements: [\"git\", \"commit\", \"-m\", \"Initial commit\"].\n- Pattern 1: `[\"git\", action]` requires exactly 2 elements, so it fails.\n- Pattern 2: `[\"git\", action, *flags]` matches: 'git' matches literal \"git\", `action` captures \"commit\", and `*flags` captures remaining items `[\"-m\", \"Initial commit\"]` as a list of length 2.\nOutput: 'Action: commit, Flags: 2'."
  },
  {
    "id": 133,
    "topic": "12. Match Case",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] What is printed when matching a dictionary pattern with specific key-value pairs?",
    "code": "response = {\"status\": 200, \"data\": \"Success\", \"cached\": True}\nmatch response:\n    case {\"status\": 404}:\n        print(\"Not Found\")\n    case {\"status\": 200, \"data\": payload}:\n        print(f\"Data: {payload}\")\n    case _:\n        print(\"Other\")",
    "options": [
      "Data: Success",
      "Other",
      "Not Found",
      "TypeError: dictionaries cannot be matched"
    ],
    "correctAnswer": 0,
    "explanation": "In Python mapping patterns, a match succeeds if the dictionary contains the specified keys with matching values, even if the dictionary contains extra keys (like `\"cached\": True`). Thus, `\"status\": 200` matches and `payload` binds to 'Success'."
  },
  {
    "id": 134,
    "topic": "12. Match Case",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the execution of nested patterns in match-case:",
    "code": "shape = (\"rectangle\", (10, 5))\nmatch shape:\n    case (\"circle\", radius):\n        print(3.14 * radius * radius)\n    case (\"rectangle\", (width, height)) if width == height:\n        print(\"Square:\", width * height)\n    case (\"rectangle\", (width, height)):\n        print(\"Rectangle:\", width * height)\n    case _:\n        print(\"Invalid\")",
    "options": [
      "Rectangle: 50",
      "Square: 50",
      "Invalid",
      "3.14"
    ],
    "correctAnswer": 0,
    "explanation": "The tuple is `(\"rectangle\", (10, 5))`.\n- Case 1: Doesn't match 'circle'.\n- Case 2: Matches structure `(\"rectangle\", (width, height))` with width=10, height=5, but guard `width == height` (10 == 5) is False.\n- Case 3: Matches structure without the guard, prints 'Rectangle: 50'."
  },
  {
    "id": 135,
    "topic": "12. Match Case",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] What is printed by type matching patterns in `match-case`?",
    "code": "def process(val):\n    match val:\n        case int(x) if x > 0:\n            return f\"Positive Int: {x}\"\n        case float(x):\n            return f\"Float: {x:.1f}\"\n        case str(s):\n            return f\"String: {s.upper()}\"\n        case _:\n            return \"Other\"\n\nprint(process(3.55), process(12))",
    "options": [
      "Float: 3.6 Positive Int: 12",
      "Float: 3.5 Positive Int: 12",
      "Positive Int: 12 Float: 3.6",
      "Other Positive Int: 12"
    ],
    "correctAnswer": 0,
    "explanation": "1. `process(3.55)`: Matches `case float(x)` -> formatted with `:.1f` rounds 3.55 to 3.6 -> 'Float: 3.6'.\n2. `process(12)`: Matches `case int(x) if x > 0` -> 'Positive Int: 12'.\nCombined print: 'Float: 3.6 Positive Int: 12'."
  },
  {
    "id": 136,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] How do nested `break` and loop `else` clauses interact in this matrix target search?",
    "code": "grid = [\n    [1, 3, 5],\n    [7, 9, 11],\n    [13, 15, 17]\n]\ntarget = 9\nfound = False\nfor row in grid:\n    for val in row:\n        if val == target:\n            found = True\n            break\n    if found:\n        print(\"Found target!\")\n        break\nelse:\n    print(\"Target missing!\")",
    "options": [
      "Found target!",
      "Found target!\nTarget missing!",
      "Target missing!",
      "Nothing is printed"
    ],
    "correctAnswer": 0,
    "explanation": "When row 2 (`[7, 9, 11]`) is searched, `val == 9` matches: `found = True` and inner `break` exits the inner loop. The subsequent `if found:` check triggers the outer `break`. Because the outer loop was exited via `break`, outer `else:` is skipped. Output: 'Found target!'."
  },
  {
    "id": 137,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "High (Bonus)",
    "type": "Edge Case",
    "isBonus": true,
    "question": "[BONUS] What is printed when a function returns from inside a `for` loop that has an `else` block?",
    "code": "def search_num(items, target):\n    for item in items:\n        if item == target:\n            return \"Returned Inside Loop\"\n    else:\n        return \"Returned Else\"\n\nprint(search_num([1, 2, 3], 2))",
    "options": [
      "Returned Inside Loop",
      "Returned Else",
      "Returned Inside Loop\nReturned Else",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "A `return` statement immediately exits the function and terminates all execution within it. It does NOT trigger the loop's `else` clause. It returns 'Returned Inside Loop'."
  },
  {
    "id": 138,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the execution carefully! What is the final output of `result`?",
    "code": "result = []\nfor i in range(1, 10):\n    if i % 3 == 0:\n        continue\n    if i > 7:\n        break\n    result.append(i)\nprint(result)",
    "options": [
      "[1, 2, 4, 5, 7]",
      "[1, 2, 4, 5, 7, 8]",
      "[1, 2, 3, 4, 5, 6, 7]",
      "[1, 2, 4, 5]"
    ],
    "correctAnswer": 0,
    "explanation": "Trace:\n- i=1: appended [1]\n- i=2: appended [1, 2]\n- i=3: i%3==0 -> continue (skipped)\n- i=4: appended [1, 2, 4]\n- i=5: appended [1, 2, 4, 5]\n- i=6: i%3==0 -> continue (skipped)\n- i=7: appended [1, 2, 4, 5, 7]\n- i=8: i > 7 -> break! (loop halts immediately)\nResult: [1, 2, 4, 5, 7]."
  },
  {
    "id": 139,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the state-machine loop below. What sequence is printed?",
    "code": "state = 1\nwhile True:\n    if state == 1:\n        print(\"A\", end=\"\")\n        state = 2\n        continue\n    elif state == 2:\n        print(\"B\", end=\"\")\n        state = 3\n    elif state == 3:\n        print(\"C\", end=\"\")\n        break\n    print(\"X\", end=\"\")",
    "options": [
      "ABXC",
      "ABC",
      "ABXCX",
      "AXBXC"
    ],
    "correctAnswer": 0,
    "explanation": "Trace:\n- State 1: prints 'A', sets state=2, `continue` skips the rest of the loop (so 'X' is NOT printed).\n- State 2: prints 'B', sets state=3. There is no continue/break here! So execution proceeds down and prints 'X'.\n- State 3: prints 'C', `break` halts the loop immediately before reaching print('X').\nCombined output: 'ABXC'."
  },
  {
    "id": 140,
    "topic": "13. Break, Continue, Pass, For-Else",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] What does the following prime-finding loop print for a list of numbers?",
    "code": "nums = [4, 6, 8, 9, 10]\nfor n in nums:\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            break\n    else:\n        print(f\"{n} is Prime\")\n        break\nelse:\n    print(\"No primes found\")",
    "options": [
      "No primes found",
      "4 is Prime",
      "9 is Prime",
      "None"
    ],
    "correctAnswer": 0,
    "explanation": "None of 4, 6, 8, 9, 10 are prime:\n- 4 has divisor 2\n- 6 has divisor 2\n- 8 has divisor 2\n- 9 has divisor 3\n- 10 has divisor 2\nEvery inner loop breaks, so the inner `else` never runs. Since the outer loop exhausts all numbers without hitting a break, the outer `else` executes, printing 'No primes found'."
  },
  {
    "id": 141,
    "topic": "14. Input Validation",
    "difficulty": "High (Bonus)",
    "type": "Error Hunt",
    "isBonus": true,
    "question": "[BONUS] Which custom validation function properly validates whether a string represents a valid signed float (e.g. '-4.5', '+0.75', '12') without crashing on inputs like '1.2.3' or '--5'?",
    "code": "# Validate float string",
    "options": [
      "def is_float(s):\n    try:\n        float(s)\n        return True\n    except ValueError:\n        return False",
      "def is_float(s):\n    return s.replace('.', '').isdigit()",
      "def is_float(s):\n    return '.' in s and s.isalnum()",
      "def is_float(s):\n    return float(s) != None"
    ],
    "correctAnswer": 0,
    "explanation": "Option B fails for negative numbers (e.g. '-4.5' still has '-' which is not a digit) and strings with multiple dots ('1.2.3.4'). Option C fails on whole numbers and negative signs. Option D crashes immediately on invalid input. Option A (EAFP using `try...except ValueError`) is the only bulletproof way to validate any valid float format in Python."
  },
  {
    "id": 142,
    "topic": "14. Input Validation",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace this multi-rule password validation function for `\"Python2026\"`. What does it return?",
    "code": "def validate_password(pwd):\n    errors = []\n    if len(pwd) < 8:\n        errors.append(\"Too short\")\n    if not any(c.isupper() for c in pwd):\n        errors.append(\"Missing uppercase\")\n    if not any(c.isdigit() for c in pwd):\n        errors.append(\"Missing digit\")\n    if not any(c in \"!@#$%^&*\" for c in pwd):\n        errors.append(\"Missing special character\")\n    return errors\n\nprint(validate_password(\"Python2026\"))",
    "options": [
      "['Missing special character']",
      "[]",
      "['Too short', 'Missing special character']",
      "['Missing digit']"
    ],
    "correctAnswer": 0,
    "explanation": "For \"Python2026\":\n- Length is 10 (>= 8) -> OK\n- Has uppercase 'P' -> OK\n- Has digits ('2', '0', '6') -> OK\n- Has NO character from \"!@#$%^&*\" -> Fails! 'Missing special character' added.\nReturns `['Missing special character']`."
  },
  {
    "id": 143,
    "topic": "14. Input Validation",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the lockout security pattern below when 3 incorrect PINs are provided:",
    "code": "correct_pin = \"7412\"\nattempts_left = 3\ninputs = [\"0000\", \"1234\", \"9999\"]\nfor attempt in inputs:\n    if attempt == correct_pin:\n        status = \"UNLOCKED\"\n        break\n    attempts_left -= 1\nelse:\n    status = \"LOCKED_PERMANENTLY\"\nprint(status, attempts_left)",
    "options": [
      "LOCKED_PERMANENTLY 0",
      "LOCKED_PERMANENTLY 3",
      "UNLOCKED 0",
      "LOCKED_PERMANENTLY -1"
    ],
    "correctAnswer": 0,
    "explanation": "Each wrong attempt decrements `attempts_left` by 1: 3 -> 2 -> 1 -> 0. The loop finishes all 3 without matching `correct_pin`. The `else` clause executes, setting `status = \"LOCKED_PERMANENTLY\"`. Output: 'LOCKED_PERMANENTLY 0'."
  },
  {
    "id": 144,
    "topic": "14. Input Validation",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] Trace the date validator for date string `\"2024-02-29\"` (Leap Year test):",
    "code": "def is_leap(y):\n    return y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)\n\ndef valid_feb(date_str):\n    y, m, d = [int(p) for p in date_str.split(\"-\")]\n    if m == 2:\n        max_days = 29 if is_leap(y) else 28\n        return 1 <= d <= max_days\n    return False\n\nprint(valid_feb(\"2024-02-29\"), valid_feb(\"2025-02-29\"))",
    "options": [
      "True False",
      "True True",
      "False False",
      "False True"
    ],
    "correctAnswer": 0,
    "explanation": "2024 is divisible by 4 and not 100, so it is a leap year; max_days = 29, so day 29 is valid (True). 2025 is not a leap year; max_days = 28, so day 29 is invalid (False). Output: 'True False'."
  },
  {
    "id": 145,
    "topic": "14. Input Validation",
    "difficulty": "High (Bonus)",
    "type": "Theory",
    "isBonus": true,
    "question": "[BONUS] In database-driven Python applications, why is directly concatenating validated user input into SQL query strings dangerous (SQL Injection vulnerability)?",
    "code": "query = \"SELECT * FROM users WHERE name = '\" + user_input + \"'\"",
    "options": [
      "Even if validated for non-emptiness, malicious input containing quotes (e.g. `' OR '1'='1`) can alter query structure; parameterized queries should always be used.",
      "String concatenation raises a TypeError in Python.",
      "It runs 10 times slower than addition.",
      "Strings in Python cannot store SQL characters."
    ],
    "correctAnswer": 0,
    "explanation": "Simple input validation often fails to catch subtle SQL injection payloads. Directly concatenating raw strings into SQL queries allows attackers to break out of data literals and inject commands. Parameterized queries / prepared statements separate code from data safely."
  },
  {
    "id": 146,
    "topic": "15. Functions",
    "difficulty": "High (Bonus)",
    "type": "Edge Case",
    "isBonus": true,
    "question": "[BONUS] THE CLASSIC PYTHON TRAP: What is printed by multiple calls to a function with a default mutable argument?",
    "code": "def append_val(val, target_list=[]):\n    target_list.append(val)\n    return target_list\n\nprint(append_val(1))\nprint(append_val(2))\nprint(append_val(3, []))",
    "options": [
      "[1]\n[1, 2]\n[3]",
      "[1]\n[2]\n[3]",
      "[1]\n[1, 2]\n[1, 2, 3]",
      "[1]\n[2]\n[1, 2, 3]"
    ],
    "correctAnswer": 0,
    "explanation": "In Python, default parameter expressions are evaluated ONCE when the function definition is executed, NOT every time the function is called! The empty list `[]` is created once and reused for all calls that omit the second argument:\n1. `append_val(1)` modifies default list -> `[1]`\n2. `append_val(2)` modifies the SAME default list -> `[1, 2]`\n3. `append_val(3, [])` passes an explicit NEW empty list `[]`, which gets `[3]`."
  },
  {
    "id": 147,
    "topic": "15. Functions",
    "difficulty": "High (Bonus)",
    "type": "Error Hunt",
    "isBonus": true,
    "question": "[BONUS] What error is raised when executing the code below, and why?",
    "code": "counter = 10\ndef modify():\n    print(counter)\n    counter = 20\n\nmodify()",
    "options": [
      "UnboundLocalError: cannot access local variable 'counter' where it is not associated with a value",
      "NameError: global variable counter not found",
      "TypeError: assignment to global constant",
      "It prints 10 then sets counter to 20"
    ],
    "correctAnswer": 0,
    "explanation": "Because `counter = 20` assigns to `counter` inside `modify()`, Python marks `counter` as a LOCAL variable throughout the entire scope of the function at compile time. When line 1 (`print(counter)`) attempts to read `counter` before the assignment has executed, Python raises an `UnboundLocalError`. To fix this, declare `global counter`."
  },
  {
    "id": 148,
    "topic": "15. Functions",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace the call stack of this recursive function. What is returned by `calc(4)`?",
    "code": "def calc(n):\n    if n <= 1:\n        return 1\n    return n + calc(n - 2)\n\nprint(calc(4))",
    "options": [
      "7",
      "10",
      "5",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Call tree:\n- calc(4) = 4 + calc(2)\n- calc(2) = 2 + calc(0)\n- calc(0) hits base condition `n <= 1`, returns 1\nResolving returns:\n- calc(2) = 2 + 1 = 3\n- calc(4) = 4 + 3 = 7.\nOutput: 7."
  },
  {
    "id": 149,
    "topic": "15. Functions",
    "difficulty": "High (Bonus)",
    "type": "Code Output",
    "isBonus": true,
    "question": "[BONUS] Trace variable arguments `*args` and keyword arguments `**kwargs` in the function below:",
    "code": "def summarize(a, *args, **kwargs):\n    return a + sum(args) + kwargs.get(\"bonus\", 0)\n\nprint(summarize(5, 10, 15, bonus=20, extra=50))",
    "options": [
      "50",
      "100",
      "30",
      "80"
    ],
    "correctAnswer": 0,
    "explanation": "- `a` receives the first positional argument: 5\n- `*args` captures remaining positional arguments as a tuple: (10, 15). `sum(args) = 25`\n- `**kwargs` captures keyword arguments as a dict: `{\"bonus\": 20, \"extra\": 50}`. `kwargs.get(\"bonus\", 0)` is 20.\nTotal: 5 + 25 + 20 = 50."
  },
  {
    "id": 150,
    "topic": "15. Functions",
    "difficulty": "High (Bonus)",
    "type": "Dry Run",
    "isBonus": true,
    "question": "[BONUS] Trace this higher-order function that applies a transformation twice:",
    "code": "def apply_twice(func, val):\n    return func(func(val))\n\ndef double_and_add(x):\n    return (x * 2) + 1\n\nprint(apply_twice(double_and_add, 3))",
    "options": [
      "15",
      "14",
      "16",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "1. Inner call: `double_and_add(3)` -> (3 * 2) + 1 = 7.\n2. Outer call: `double_and_add(7)` -> (7 * 2) + 1 = 15.\nOutput: 15."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { EXAM_QUESTIONS };
}
