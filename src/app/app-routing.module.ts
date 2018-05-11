import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormGroupedComponent } from './form-grouped/form-grouped.component';
import { JobCodeComponent } from './job-code/job-code.component';
import { TableComponent } from './table/table.component';
import { jobCodeAddEditComponent } from './job-code-add-edit/job-code-add-edit.component';

const appRoutes: Routes = [
  { path: 'table',component:TableComponent},
  { path: 'form',component: FormComponent},
  { path: 'form-grouped',component: FormGroupedComponent},
  { path: 'job-codes',component: JobCodeComponent},
  { path: 'job-code/:id',component: jobCodeAddEditComponent},
  { path: 'job-code',component: jobCodeAddEditComponent}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
