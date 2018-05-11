import { Component, ViewContainerRef } from '@angular/core';
import { NovoModalService } from "novo-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef, modalService: NovoModalService) {
    modalService.parentViewContainer = viewContainerRef;
  }
}
