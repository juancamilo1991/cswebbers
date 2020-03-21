import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { MainEvaluationComponent } from './components/main-evaluation/main-evaluation.component';
import { FrontComponent } from './components/front/front.component';

const routes: Routes = [
  { path: 'front', component: FrontComponent },
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  { path: 'evaluation', component: MainEvaluationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
