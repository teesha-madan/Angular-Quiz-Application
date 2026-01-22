import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-text-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-question.html'
})
export class TextQuestionComponent {

  @Input() question!: Question;
  @Input() answer?: string;

  @Output() answerTyped = new EventEmitter<string>();

  onInput(value: string): void {
    this.answerTyped.emit(value);
  }
}
