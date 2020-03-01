import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FrontComponent } from './components/front/front.component';
import { MainEvaluationComponent } from './components/main-evaluation/main-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    EvaluationComponent,
    EvaluationItemComponent,
    FrontComponent,
    MainEvaluationComponent,
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
  providers: [SimpleEvalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
