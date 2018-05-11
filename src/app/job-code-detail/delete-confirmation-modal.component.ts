import { Component } from '@angular/core';
import { NovoModalRef, NovoModalParams } from "novo-elements";
import { JobCodeLoader } from '../job-code-loader.service';

@Component({
  selector: 'delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html'
})
export class DeleteConfirmationModal {
  constructor(private modalRef: NovoModalRef,
              private jobCodeLoader: JobCodeLoader,
              private novoModalParams: NovoModalParams) {

  }

  close() {
    this.modalRef.close()
  }

  onDelete() {
    this.jobCodeLoader.deleteJobCode(this.novoModalParams['id'])
      .subscribe(() => this.modalRef.close(true));
  }
}
