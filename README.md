# Angular Quiz Application

An Angular-based quiz application that allows users to select quizzes by category, attempt questions within a time limit, reset answers during the quiz, and view final results after submission. The application uses JSON Server as a mock backend.

---

## Features

- Quiz selection using dropdown
- Countdown before quiz starts (3 → 2 → 1)
- Fixed quiz timer (60 seconds)
- Supports MCQ and Text-based questions
- Previous / Next question navigation
- Reset answers during quiz
- Prevent starting a new quiz until current quiz finishes
- Auto-submit when timer ends
- Final score calculation with negative marking
- Clean and responsive UI

---

## Technologies Used

- Angular
- TypeScript
- HTML & CSS
- JSON Server
- Postman

---

## Project Structure
src/
├── app/
│ ├── components/
│ │ ├── quiz-selection/
│ │ ├── quiz-player/
│ │ ├── mcq-question/
│ │ └── text-question/
│ ├── services/
│ │ └── quiz.service.ts
│ ├── models/
│ │ ├── quiz.model.ts
│ │ └── question.model.ts
│ └── directives/
│ └── countdown.directive.ts
└── assets/


---

## ⚙️ Setup Instructions

### Install dependencies

```bash
npm install
```

### Start JSON Server

Ensure db.json exists in the project root.

```bash
npx json-server --watch db.json --port 3000
```

Open in browser:

http://localhost:3000/quizzes

### Run Angular Application
``` bash
ng serve
```

Open:
http://localhost:4200

### API Endpoint
Method	    Endpoint	    Description
GET	        /quizzes	    Retrieve all quizzes

Base URL:
http://localhost:3000


### API Testing

A Postman collection is included:

File: Angular-Quiz-API.postman_collection.json

Endpoint tested: GET /quizzes

### Scoring Logic

Correct answer → marksIfCorrect

Wrong answer → negativeMark

Unanswered → no marks

Quiz auto-submits when timer reaches zero


## Author

Teesha Madan