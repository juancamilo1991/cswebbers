import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleEvalService } from './services/simple-eval.service';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { EvaluationItemComponent } from './components/evaluation-item/evaluation-item.component';
import { FrontComponent } from './frontpage/front/front.component';
import { MainEvaluationComponent } from './components/main-evaluation/main-evaluation.component';
import { EvaluationProcessComponent } from './components/evaluation-process/evaluation-process.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage/frontpage.component';
import { LoginComponent } from './login-registration/login/login.component';
import { RegistrationComponent } from './login-registration/registration/registration.component';
import { LoginPageComponent } from './login-registration/login-page/login-page.component';
import { RegistrationPageComponent } from './login-registration/registration-page/registration-page.component';
import { SurveyAnswerComponent } from './survey/survey-answer/survey-answer.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { SurveyAnswerPageComponent } from './survey/survey-answer-page/survey-answer-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MyprojectComponent } from './components/myproject/myproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    EvaluationComponent,
    EvaluationItemComponent,
    FrontComponent,
    MainEvaluationComponent,
    EvaluationProcessComponent,
    FooterComponent,
    FrontpageComponent,
    LoginComponent,
    RegistrationComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SurveyAnswerComponent,
    ProjectPageComponent,
    SurveyAnswerPageComponent,
    LoadingSpinnerComponent,
    MyprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,    
    MatTabsModule,
    MatListModule,
    MatRadioModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SimpleEvalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
