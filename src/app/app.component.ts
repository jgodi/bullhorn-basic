import { Component,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

interface MockData {
  id: number;
  embeddedObj: { id: number; test: string; another: { id: number } };
  Type: { id: number };
  title: string;
  status: string;
  enabled: boolean;
  Description: number;
  Code: string;
  RateType: string;
  address: { city?: string; state?: string };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  getCurrentStateUrl() : string {
    // console.log(this.router.url);
    
    return this.router.url;
  }
  public basicRows;
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
    'Code',
    'RateType',
    'Type',
    'status',
    'Description'
  ];
  constructor(private ref: ChangeDetectorRef,private router: Router) {
    this.basicRows = [];
    this.sharedColumns = [];
    for (let i = 0; i < 20; i++) {
      let day = 5;
      this.basicRows.push({
        Type: 'Pay/Bill' ,
        title: 'weekday - Day shift',
        status: 'Active',
        Description: 'Standard hourly day shift rate',
        Code: 'NAS' + i,
        RateType: 'Hours',
      });
      if(i%4 === 0){
        this.basicRows.push({
          Type: 'Pay' ,
          title: 'Expense - Mileage',
          status: 'Active',
          Description: 'Mileage expense, time based',
          Code: 'NAS' + (i+20),
          RateType: 'Hours',
        });        
      }
    }

  this.sharedColumns = [
    {
      id: 'Code',
      label: 'Code',
      type: 'text'
    },
    {
      id: 'RateType',
      label: 'Rate Type',

    },
    {
      id: 'Type',
      label: 'Type',
      enabled: true,
      type: 'text',
    },
    {
      id: 'Description',
      label: 'Description',
      enabled: true,
      type: 'text',
    },
    {
      id: 'title',
      label: 'title',
      enabled: true,
      type: 'link:mailto',
      attributes: {
        target: '_blank',
      },
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
