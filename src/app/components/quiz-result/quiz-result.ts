import { Component, Input } from '@angular/core';
import { ResultPipe } from '../../pipes/result-pipe';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [ResultPipe],
  templateUrl: './quiz-result.html'
})
export class QuizResultComponent {
  @Input() score!: number;
}
