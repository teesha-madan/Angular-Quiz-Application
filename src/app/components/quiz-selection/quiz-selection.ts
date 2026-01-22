import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz.model';
import { QuizPlayerComponent } from '../../components/quiz-player/quiz-player';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-quiz-selection',
  standalone: true,
  imports: [CommonModule, FormsModule,QuizPlayerComponent],
  templateUrl: './quiz-selection.html',
  styleUrls: ['./quiz-selection.css']
})
export class QuizSelectionComponent implements OnInit {

  quizzes: Quiz[] = [];
  selectedQuiz: Quiz | null = null;
  showCountdown = false;
  countdown = 3;
  showQuizPlayer = false;
  loading=true;
  countdownTimer:any;

  quizInProgress=false;
 constructor(
  private quizService: QuizService,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {
  this.quizService.getQuizzes().subscribe({
    next: (quizzes) => {
      console.log('QUIZZES FROM API:', quizzes);

      this.quizzes = quizzes;
      this.selectedQuiz = quizzes[0]; // auto-select
    },
    error: (err) => {
      console.error('API ERROR', err);
    }
  });
}

startQuiz() {
  if (!this.selectedQuiz) return;

  this.showCountdown = true;
  this.showQuizPlayer = false;
  this.countdown = 3;

  const intervalId = setInterval(() => {
    this.countdown--;
    this.cdr.detectChanges();
    console.log('Countdown:', this.countdown);

    if (this.countdown === 0) {
      clearInterval(intervalId);

      this.showCountdown = false;
      this.showQuizPlayer = true;

      this.quizInProgress = true;

      this.cdr.detectChanges();
    }
  }, 1000);
}

}
