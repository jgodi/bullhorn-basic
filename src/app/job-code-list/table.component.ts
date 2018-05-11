import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobCode } from '../job-code';
import { JobCodeLoader } from '../job-code-loader.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  sharedDisplayColumns;
  isLoading:boolean = true;

  sharedPaginationOptions = {
    theme: 'standard',
    pageSize: 10,
    pageSizeOptions: [10, 50, 100, 250, 500],
  };

  // basicRows: Observable<JobCode[]>;
  basicRows: JobCode[];

  sharedColumns = [
    {
      id: 'id',
      label: 'ID',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'title',
      label: 'Title',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
      template: 'title'
    },
    {
      id: 'code',
      label: 'Code',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'status',
      label: 'Status',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'description',
      label: 'Description',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
  ];

  constructor(private jobCodeLoader: JobCodeLoader, private router: Router) {
    this.sharedDisplayColumns = ['title', 'code', 'status', 'description'];
    jobCodeLoader.getList()
      .pipe(
        delay(2000)
      )
      .subscribe(jobCodes => {
        this.basicRows = jobCodes;
        this.isLoading = false;
      });
  }

  ngOnInit() {
  }

  onAdd() {
    this.router.navigate(['job-code']);
  }

}
