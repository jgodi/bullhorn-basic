import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NovoElementsModule, NovoElementProviders } from "novo-elements";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormGroupedComponent } from './form-grouped/form-grouped.component';
import { JobCodeComponent } from './job-code/job-code.component';
import { jobCodeAddEditComponent } from './job-code-add-edit/job-code-add-edit.component';
import { deleteModalComponent } from './delete-job-code-modal/delete-modal.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    FormGroupedComponent,
    JobCodeComponent,
    jobCodeAddEditComponent,
    deleteModalComponent
  ],
  entryComponents : [deleteModalComponent],
  imports: [
    NovoElementsModule,
    NovoElementProviders.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
