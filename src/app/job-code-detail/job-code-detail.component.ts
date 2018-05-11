import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobCodeLoader } from '../job-code-loader.service';
import { JobCode } from '../job-code';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobCodeMeta } from './job-code-meta';
import { FormUtils, NovoModalRef, NovoModalService } from 'novo-elements';
import { DeleteConfirmationModal } from './delete-confirmation-modal.component'

@Component({
  selector: 'job-code-detail',
  templateUrl: './job-code-detail.component.html'
})
export class JobCodeDetailComponent {
  jobCodeId;
  isEditingMode: boolean = false;
  jobCodeForm: any;
  jobCodeFormFieldSet: any;
  currentJobCode: JobCode;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private jobCodeLoader: JobCodeLoader,
              private fb: FormBuilder,
              private router: Router,
              private formUtils: FormUtils,
              private modalRef: NovoModalRef,
              private modalService: NovoModalService) {
    this.jobCodeId = route.params._value.jobCodeId;
    this.isEditingMode = !!(this.jobCodeId && this.jobCodeId.length);
    this.jobCodeForm = formUtils.toFieldSets(
      JobCodeMeta,
      '$ USD',
      {},
      { token: 'TOKEN', military: true },
    );
    formUtils.forceShowAllControlsInFieldsets(this.jobCodeForm);
    this.jobCodeFormFieldSet = formUtils.toFormGroupFromFieldset(this.jobCodeForm);

    if (this.isEditingMode) {
      jobCodeLoader.getDetails(this.jobCodeId)
        .subscribe((jobCodeObject: JobCode) => {
          this.currentJobCode = jobCodeObject;
          formUtils.setInitialValuesFieldsets(this.jobCodeForm, jobCodeObject);
          this.jobCodeFormFieldSet = formUtils.toFormGroupFromFieldset(this.jobCodeForm);
          this.isLoading = false;
        });
    } else {
      this.jobCodeFormFieldSet.controls.code.setValue(this.getNewCode());
      this.isLoading = false;
    }
  }

  private goBack() {
    this.router.navigate(['job-codes']);
  }

  onDelete() {
    this.modalService.open(DeleteConfirmationModal, {
      id: this.jobCodeId
    })._onClosed.then(result => result ? this.goBack() : false);
  }

  onCancel() {
    this.goBack();
  }

  onSave() {
    let newJobCode:any = {
      code: this.jobCodeFormFieldSet.controls.code.value,
      title: this.jobCodeFormFieldSet.controls.title.value,
      status: this.jobCodeFormFieldSet.controls.status.value,
      description: this.jobCodeFormFieldSet.controls.description.value
    }
    if (this.isEditingMode) {
      newJobCode.id = this.currentJobCode.id;
    }
    this.jobCodeLoader.postJobCode(newJobCode)
      .subscribe(msg => this.goBack());
  }

  private getNewCode() {
    return 'XX' + Math.floor(Math.random() * 10e2);
  }
}
