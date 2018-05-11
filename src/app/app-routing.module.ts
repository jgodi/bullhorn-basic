import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './job-code-list/table.component';
import { JobCodeDetailComponent } from './job-code-detail/job-code-detail.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'job-codes', component: TableComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'job-code', component: JobCodeDetailComponent },
  { path: 'job-code/:jobCodeId', component: JobCodeDetailComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
