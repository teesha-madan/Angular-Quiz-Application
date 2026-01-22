import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectionComponent } from './quiz-selection';

describe('QuizSelection', () => {
  let component: QuizSelectionComponent;
  let fixture: ComponentFixture<QuizSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSelectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
