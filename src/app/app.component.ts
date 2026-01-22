import { Component } from '@angular/core';
import { QuizSelectionComponent } from './components/quiz-selection/quiz-selection';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizSelectionComponent],
  template: `<app-quiz-selection></app-quiz-selection>`
})
export class AppComponent {}
