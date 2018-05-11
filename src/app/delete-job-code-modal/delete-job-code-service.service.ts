import { Injectable } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
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
@Injectable()
export class DeleteJobCodeServiceService {

  constructor(public  router: Router, private route: ActivatedRoute, public http: HttpClient) {}
  private id;
  delete(){
        this.id = this.route.snapshot.params['id'];
        this.http
          .delete<JobCode>(API_URL + '/' + this.id,httpOptions)
          .subscribe(jobCode => {
            this.router.navigateByUrl('/job-codes');
            })    

  }

}
