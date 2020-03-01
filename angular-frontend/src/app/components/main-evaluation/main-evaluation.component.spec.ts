import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEvaluationComponent } from './main-evaluation.component';

describe('MainEvaluationComponent', () => {
  let component: MainEvaluationComponent;
  let fixture: ComponentFixture<MainEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
