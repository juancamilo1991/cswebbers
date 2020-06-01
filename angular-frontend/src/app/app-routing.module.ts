import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { MainEvaluationComponent } from './components/main-evaluation/main-evaluation.component';
import { FrontComponent } from './frontpage/front/front.component';
import { LoginPageComponent } from './login-registration/login-page/login-page.component';
import { RegistrationPageComponent } from './login-registration/registration-page/registration-page.component';
import { SurveyAnswerPageComponent } from './survey/survey-answer-page/survey-answer-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



const routes: Routes = [
  { path: 'front', component: FrontComponent },
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  { path: 'evaluation', component: MainEvaluationComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'results', component: SurveyAnswerPageComponent },
  { path: 'spinner', component: LoadingSpinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
