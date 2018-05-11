import { Component,ChangeDetectorRef } from '@angular/core';
import { MockMeta, MockMetaHeaders } from '../mock-meta.data';
import {FormUtils} from 'novo-elements';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://mock-job-codes.getsandbox.com/jobCodes';
console.log("here");
interface JobCode {
  code : string;
  description : string;
  title : string;
  status : string;
  id : number;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})



export class FormComponent {
  private dynamic: any;
  private dynamicForm: any;
  private dynamicVertical: any;
  private dynamicVerticalForm: any;
  private fieldsets: Array<any>;
  private fieldsetsForm: any;
  private id : string;  
  public redirectToTableRoute(form): void {
    if(form.isValid){
      this.router.navigateByUrl('/table');
    }
  };
  constructor(private ref: ChangeDetectorRef, private formUtils: FormUtils,private router: Router, private route: ActivatedRoute) {



    this.id = this.route.snapshot.params['id'];
    console.log('id',this.id);
    if (this.id){
      
    }
    this.dynamic = formUtils.toFieldSets(
      MockMeta,'$ USD',
      {},
      { token: 'TOKEN', military: true }
    );
    this.dynamicForm = formUtils.toFormGroupFromFieldset(this.dynamic);
    this.dynamicVertical = formUtils.toControls(MockMeta,'$ USD', {}, { token: 'TOKEN', military: true });
    this.dynamicVerticalForm = formUtils.toFormGroup(this.dynamicVertical);

    // Dynamic + Fieldsets
    this.fieldsets = formUtils.toFieldSets(
      MockMetaHeaders,'$ USD',
      {},
      { token: 'TOKEN' }
    );
    this.fieldsetsForm = formUtils.toFormGroupFromFieldset(this.fieldsets);
  }
}
