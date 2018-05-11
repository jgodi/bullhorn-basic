import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NovoElementsModule, NovoElementProviders, NovoModalService } from "novo-elements";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './job-code-list/table.component';
import { JobCodeDetailComponent } from './job-code-detail/job-code-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { DeleteConfirmationModal } from './job-code-detail/delete-confirmation-modal.component'
import { JobCodeLoader } from './job-code-loader.service'


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TableComponent,
    DashboardComponent,
    CardsComponent,
    JobCodeDetailComponent,
    DeleteConfirmationModal
  ],
  entryComponents: [
    DeleteConfirmationModal
  ],
  imports: [
    NovoElementsModule,
    NovoElementProviders.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    JobCodeLoader,
    NovoModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
