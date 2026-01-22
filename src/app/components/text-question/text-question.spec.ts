import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestion } from './text-question';

describe('TextQuestion', () => {
  let component: TextQuestion;
  let fixture: ComponentFixture<TextQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
