import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  hoursWorkedDisplayColumns = [];
  hoursWorkedRows = [];

  hoursWorkedPaginationOptions = {
    theme: 'standard',
    pageSize: 10,
    pageSizeOptions: [10, 50, 100, 250, 500],
  };

  hoursWorkedColumns = [
    {
      id: 'earnCode',
      label: 'Earn Code',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'payBill',
      label: 'Pay/Bill',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
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
      id: 'defaultPay',
      label: 'Default Pay',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'minPay',
      label: 'Min Pay',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'maxPay',
      label: 'maxPay',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'defaultBill',
      label: 'Default Bill',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'minBill',
      label: 'Min Bill',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    },
    {
      id: 'maxBill',
      label: 'Max Bill',
      enabled: true,
      type: 'text',
      filterable: false,
      sortable: false,
    }
  ];

  constructor() {
    this.hoursWorkedDisplayColumns = ['earnCode', 'payBill', 'code', 'defaultPay', 'minPay', 'maxPay', 'defaultBill', 'minBill', 'maxBill'];
    this.hoursWorkedRows = [
      {
        earnCode: 'Weekday - Day Shift',
        payBill: [],
        code: 'NAS101',
        defaultPay: 14.25,
        minPay: 18.25,
        maxPay: 20.25,
        defaultBill: 20.50,
        minBill: 5.00,
        maxBill: 25.00
      },
      {
        earnCode: 'Weekday - Day Shift OT (1.5)',
        payBill: [],
        code: 'NAS201',
        defaultPay: 17.25,
        minPay: 16.25,
        maxPay: 20.25,
        defaultBill: 20.50,
        minBill: 10.00,
        maxBill: 25.00
      },
      {
        earnCode: 'Weekday - Day Shift OT (1.8)',
        payBill: [],
        code: 'NAS301',
        defaultPay: 14.25,
        minPay: 18.25,
        maxPay: 20.25,
        defaultBill: 20.50,
        minBill: 15.00,
        maxBill: 30.00
      }
    ]
  }

  ngOnInit() {
  }

  onDelete() {
  }

  onConfigure() {
  }

}
