import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../models/quiz.model';
import { McqQuestionComponent } from '../mcq-question/mcq-question';
import { TextQuestionComponent } from '../text-question/text-question';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-player',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './quiz-player.html',
  styleUrls: ['./quiz-player.css']
})
export class QuizPlayerComponent {

  @Input() quiz!: Quiz;
// @Output() quizFinished = new EventEmitter<void>();

  currentIndex = 0;
  quizFinished=false;
  finalScore=0;
  submitted=false;
  score=0;
  timerId:any;
  timeLeft!: number;
  answers: { [questionId: number]: string } = {};
  ngOnInit() {
  // total time from quiz (seconds)
  this.timeLeft = 60;

  this.timerId = setInterval(() => {
    this.timeLeft--;

    if (this.timeLeft <= 0) {
      clearInterval(this.timerId);
      this.submitQuiz();
    }
  }, 1000);
}
submitQuiz() {
  this.submitted=true;
  clearInterval(this.timerId);
  this.submitted = true;
}

  get currentQuestion() {
    return this.quiz.questions[this.currentIndex];
  }

  next(): void {
    if (this.currentIndex < this.quiz.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  saveAnswer(answer: string): void {
    this.answers[this.currentQuestion.id] = answer;
  }
  finishQuiz() {
  this.submitted = true;
  this.score = 0;

  this.quiz.questions.forEach(q => {
    const userAnswer = this.answers[q.id];

    if (!userAnswer) return;

    if (userAnswer === q.correctAnswer) {
      this.score += q.marksIfCorrect;
    } else {
      this.score -= q.negativeMark;
    }
  });

  if (this.timerId) {
    clearInterval(this.timerId);
  }
}
resetQuiz() {
  this.answers = {};           // clear answers
  this.currentIndex = 0;       // go back to first question
}



}
