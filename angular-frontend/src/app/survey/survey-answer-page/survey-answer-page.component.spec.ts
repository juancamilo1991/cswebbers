import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnswerPageComponent } from './survey-answer-page.component';

describe('SurveyAnswerPageComponent', () => {
  let component: SurveyAnswerPageComponent;
  let fixture: ComponentFixture<SurveyAnswerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnswerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnswerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
