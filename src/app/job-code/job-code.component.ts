import { Component,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://mock-job-codes.getsandbox.com/jobCodes';

interface MockData {
  id: number;
  embeddedObj: { id: number; test: string; another: { id: number } };
  billType: { id: number };
  title: string;
  status: string;
  enabled: boolean;
  description: number;
  code: string;
  rateType: string;
  address: { city?: string; state?: string };
}
interface JobCode {
  code : string;
  description : string;
  title : string;
  status : string;
  id : number;
}


@Component({
  selector: 'app-jobCode',
  templateUrl: './job-code.component.html',
  styleUrls: ['./job-code.component.scss']
})
export class JobCodeComponent {


  // public basicRows;
  public sharedColumns;
  public log(event: { originalEvent: MouseEvent; row: MockData }): void {
    console.log('[DataTable] Event Triggered!', event); // tslint:disable-line
  };
  public checkDisabled(row: MockData): boolean {
    return true;
  };
  public sharedPaginationOptions = {
    theme: 'standard',
    pageSize: 10,
    pageSizeOptions: [10, 50, 100, 250, 500],
  };

  public sharedDisplayColumns = [
    'title',
    'code',
    'status',
    'description'
  ];
  public goToRoute(rec): void {
    console.log(rec);
    this.router.navigateByUrl('/job-code/' + rec.row.id);
  };
  basicRows: JobCode[] = [];

  constructor(private ref: ChangeDetectorRef , private router: Router, http: HttpClient) {
    // this.basicRows = [];
    this.sharedColumns = [];
    http
      .get<JobCode[]>(API_URL)
      .subscribe(jobCodes => this.basicRows = jobCodes);
    // for (let i = 0; i < 20; i++) {
    //   let day = 5;
    //   this.basicRows.push({
    //     billType: 'Pay/Bill' ,
    //     title: 'weekday - Day shift',
    //     status: 'Active',
    //     description: 'Standard hourly day shift rate',
    //     code: 'NAS' + i,
    //     rateType: 'Hours',
    //   });
    //   if(i%4 === 0){
    //     this.basicRows.push({
    //       billType: 'Pay' ,
    //       title: 'Expense - Mileage',
    //       status: 'Active',
    //       description: 'Mileage expense, time based',
    //       code: 'NAS' + (i+20),
    //       rateType: 'Hours',
    //     });        
    //   }
    // }

  this.sharedColumns = [
    {
      id: 'code',
      label: 'Code',
      type: 'text'
    },
    {
      id: 'description',
      label: 'Description',
      enabled: true,
      type: 'text',
    },
    {
      id: 'title',
      label: 'title',
      enabled: true,
      type: 'link',
      handlers: {
        click: this.goToRoute.bind(this),
      }
    },
    {
      id: 'status',
      label: 'Status',
      enabled: true,
      type: 'text',
    }
  ];
    // this.basicRows = [...this.staticDataSet1];
    // this.basicService = new StaticDataTableService([...this.staticDataSet1]);
    // this.remoteService = new RemoteMockDataService([...this.staticDataSet1.slice(0, 10)]);
  }
}
