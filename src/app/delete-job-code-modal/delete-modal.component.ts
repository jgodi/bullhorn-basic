import { Component,ChangeDetectorRef } from '@angular/core';
import { NovoModalRef } from "novo-elements";
import { DeleteJobCodeServiceService } from './delete-job-code-service.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
  providers: [DeleteJobCodeServiceService]
})

export class deleteModalComponent {
    constructor(private modalRef: NovoModalRef, public deleteJobCodeServiceService : DeleteJobCodeServiceService) {
    }

    close() {
        this.modalRef.close();
    }
    delete(){
      this.deleteJobCodeServiceService.delete()

    }
    

}
