import { Component,ChangeDetectorRef,ViewContainerRef } from '@angular/core';
import { MockMeta, MockMetaHeaders } from '../mock-meta.data';
import {FormUtils,NovoModalService,NovoModalRef} from 'novo-elements';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { deleteModalComponent } from '../delete-job-code-modal/delete-modal.component';

const API_URL = 'http://mock-job-codes.getsandbox.com/jobCodes';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
interface JobCode {
  code : string;
  description : string;
  title : string;
  status : string;
  id : number;
};

@Component({
  selector: 'app-job-code-add-edit',
  templateUrl: './job-code-add-edit.component.html',
  styleUrls: ['./job-code-add-edit.component.scss']
})




export class jobCodeAddEditComponent {
  private dynamic: any;
  private dynamicForm: any;
  private dynamicVertical: any;
  private dynamicVerticalForm: any;
  private fieldsets: Array<any>;
  private fieldsetsForm: any;
  private id : string;
  private jobCode  = <JobCode>{};  
  private editMode = false;

  showWarning() {
        console.log('showWarning called');
        this.modalService.open(deleteModalComponent);
    }
  public addOrEditJobCode (form): void {
    if(form.isValid){
      if(!this.editMode){
        this.jobCode.code = this.dynamicForm.controls.code.value 
        this.jobCode.title = this.dynamicForm.controls.title.value 
        this.jobCode.description = this.dynamicForm.controls.description.value 
        this.jobCode.status = this.dynamicForm.controls.status.value 
        this.http
          .post<JobCode>(API_URL,this.jobCode,httpOptions)
          .subscribe(jobCode => {
            this.router.navigateByUrl('/job-codes');

            })        
      }
      else {
        this.router.navigateByUrl('/job-codes');

      }
    }
  };

  // public deleteJobCode (): void {
  //       this.http
  //         .delete<JobCode>(API_URL + '/' + this.id,httpOptions)
  //         .subscribe(jobCode => {
  //           this.router.navigateByUrl('/job-codes');
  //           })    

  // }

  constructor(private ref: ChangeDetectorRef, private formUtils: FormUtils,public  router: Router, private route: ActivatedRoute, public http: HttpClient,private modalService: NovoModalService,private viewContainerRef: ViewContainerRef) {


    this.modalService = modalService;
    this.modalService.parentViewContainer = viewContainerRef;

    this.id = this.route.snapshot.params['id'];
    console.log('id',this.id);

    this.dynamic = formUtils.toFieldSets(
      MockMeta,'$ USD',
      {},
      { token: 'TOKEN', military: true }
    );
    // formUtils.setInitialValuesFieldsets(this.dynamic, { des: 'Initial F Name'}
    this.dynamicForm = formUtils.toFormGroupFromFieldset(this.dynamic);
    // this.dynamicVertical = formUtils.toControls(MockMeta,'$ USD', {}, { token: 'TOKEN', military: true });
    // this.dynamicVerticalForm = formUtils.toFormGroup(this.dynamicVertical);

    // Dynamic + Fieldsets
    this.fieldsets = formUtils.toFieldSets(
      MockMetaHeaders,'$ USD',
      {},
      { token: 'TOKEN' }
    );
    this.fieldsetsForm = formUtils.toFormGroupFromFieldset(this.fieldsets);

    if (this.id){
    http
      .get<JobCode>(API_URL + '/' + this.id)
      .subscribe(jobCode => {
        this.jobCode = jobCode;
        if(jobCode.id){
          this.editMode = true;
          this.dynamicForm.controls.code.disable();
          this.dynamicForm.controls.code.setValue(jobCode.code);
          this.dynamicForm.controls.title.setValue(jobCode.title);
          this.dynamicForm.controls.description.setValue(jobCode.description);
          this.dynamicForm.controls.status.setValue(jobCode.status);
        }
        else{
          this.router.navigateByUrl('/job-codes');
        }
        })

    }
    // this.dynamicForm.controls.code.initialValue = 'njjjjjj';
  }
}
