import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqQuestion } from './mcq-question';

describe('McqQuestion', () => {
  let component: McqQuestion;
  let fixture: ComponentFixture<McqQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McqQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McqQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
