import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-mcq-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mcq-question.html'
})
export class McqQuestionComponent {

  @Input() question!: Question;
  @Input() selectedAnswer?: string;

  @Output() answerSelected = new EventEmitter<string>();

  select(option: string): void {
    this.answerSelected.emit(option);
  }
}
