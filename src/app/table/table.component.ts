import { Component,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

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
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {


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
    'code',
    'rateType',
    'billType',
    'status',
    'description'
  ];
  public goToRoute(): void {
    this.router.navigateByUrl('/form');
  };
  constructor(private ref: ChangeDetectorRef , private router: Router) {
    this.basicRows = [];
    this.sharedColumns = [];
    for (let i = 0; i < 20; i++) {
      let day = 5;
      this.basicRows.push({
        billType: 'Pay/Bill' ,
        title: 'weekday - Day shift',
        status: 'Active',
        description: 'Standard hourly day shift rate',
        code: 'NAS' + i,
        rateType: 'Hours',
      });
      if(i%4 === 0){
        this.basicRows.push({
          billType: 'Pay' ,
          title: 'Expense - Mileage',
          status: 'Active',
          description: 'Mileage expense, time based',
          code: 'NAS' + (i+20),
          rateType: 'Hours',
        });        
      }
    }

  this.sharedColumns = [
    {
      id: 'code',
      label: 'Code',
      type: 'text'
    },
    {
      id: 'rateType',
      label: 'Rate Type',
      type : 'text'

    },
    {
      id: 'billType',
      label: 'Type',
      enabled: true,
      type: 'text',
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
