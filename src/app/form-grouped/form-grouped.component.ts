import { Component,ChangeDetectorRef } from '@angular/core';
import { MockMeta, MockMetaHeaders } from '../mock-meta.data';
import {FormUtils,ReadOnlyControl,SelectControl,TextBoxControl,CheckboxControl,NovoFormGroup,NovoControlGroupAddConfig,BaseControl} from 'novo-elements';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-grouped',
  templateUrl: './form-grouped.component.html',
  styleUrls: ['./form-grouped.component.scss']
})

export class FormGroupedComponent {

    public custom: NovoFormGroup;
    public horizontal: NovoFormGroup;
    public horizontalOptions: NovoFormGroup;
    public vertical: NovoFormGroup;
    public verticalOptions: NovoFormGroup;
    public controls: BaseControl[] = [];
    public controls2: BaseControl[] = [];
    public initialValue: {}[] = [];
    public initialValue2: {}[] = [];
    public initValue: {}[] = [];
    public initValue2: {}[] = [];
    public simpleAddConfig: NovoControlGroupAddConfig = {
        label: 'Add'
    };
    public emptyMessage: string = 'There are no items...';
    fullConfig: any = {
        refresh: false,
        icon: 'email',
        messageIcon: 'email',
        close: false,
        move: false,
        title: 'Hours Worked',
        loading: false,
        padding: true
    };
    fullConfig2: any = {
        refresh: false,
        icon: 'email',
        messageIcon: 'email',
        close: false,
        move: false,
        title: 'PTO - Standard',
        loading: false,
        padding: true
    };
  constructor(private ref: ChangeDetectorRef, private formUtils: FormUtils,private router: Router) {
        // Grouped form demo
        this.setupGroupedFormDemo();
  }

    private setupGroupedFormDemo() {
        this.horizontal = this.formUtils.emptyFormGroup();
        this.horizontalOptions = this.formUtils.emptyFormGroup();
        let c1 = new TextBoxControl({ key: 'earnCode', label: 'EARN CODE',width: 150});
        let c2 = new SelectControl({ key: 'payBill', label: 'PAY/BIILL', options: [{ value: 'Pay & Bill', label: 'Pay & Bill' },{ value: 'Pay', label: 'Pay' }] });
        let c3 = new TextBoxControl({ key: 'code', label: 'CODE' });
        let c4 = new TextBoxControl({ key: 'defaultPay', label: 'DEFAYLT PAY' });
        let c5 = new TextBoxControl({ key: 'minPay', label: 'MIN PAY' });
        let c6 = new TextBoxControl({ key: 'maxPay', label: 'MAX PAY' });
        let c7 = new TextBoxControl({ key: 'defaultBill', label: 'DEFAULT BILL' });
        let c8 = new TextBoxControl({ key: 'minBill', label: 'MIN BILL' });
        let c9 = new TextBoxControl({ key: 'maxBill', label: 'MAX BILL' });
        this.controls.push(c1);
        this.controls.push(c2);
        this.controls.push(c3);
        this.controls.push(c4);
        this.controls.push(c5);
        this.controls.push(c6);
        this.controls.push(c7);
        this.controls.push(c8);
        this.controls.push(c9);
       this.initValue = [
            { earnCode : "Weekday- Day Shift",payBill : "Pay & Bill",code : "NAS101" ,defaultPay : "$14.25" ,minPay : "$14.25" ,maxPay : "$18.25" ,defaultBill : "$20.50" ,minBill : "$20.50" ,maxBill:"$24.50" },
            { earnCode : "Weekday- Day Shift OT (1.5)",payBill : "Pay & Bill",code : "NAS201" ,defaultPay : "$17.81" ,minPay : "$17.81" ,maxPay : "$21.88" ,defaultBill : "$22.50" ,minBill : "$22.50" ,maxBill:"$28.50" },
            { earnCode : "Weekday- Day Shift OT (1.8)",payBill : "Pay & Bill",code : "NAS301" ,defaultPay : "$24.25" ,minPay : "$24.25" ,maxPay : "$28.25" ,defaultBill : "$25.50" ,minBill : "$25.50" ,maxBill:"$29.50" },
        ];
        let c21 = new SelectControl({ key: 'earnCode', label: 'EARN CODE', options: [{ value: 'PTO - Standard', label: 'PTO - Standard' },{ value: 'PTO - Extended', label: 'PTO - Extended' }] });
        let c22 = new TextBoxControl({ key: 'ptoEarnCode', label: 'EARN CODE',width: 150});
        let c23 = new TextBoxControl({ key: 'defaultPay', label: 'DEFAYLT PAY' });
        let c24 = new TextBoxControl({ key: 'minPay', label: 'MIN PAY' });
        let c25 = new TextBoxControl({ key: 'maxPay', label: 'MAX PAY' });
        let c26 = new TextBoxControl({ key: 'defaultBill', label: 'DEFAULT BILL' });
        let c27 = new TextBoxControl({ key: 'minBill', label: 'MIN BILL' });
        let c28 = new TextBoxControl({ key: 'maxBill', label: 'MAX BILL' });
        this.controls2.push(c21);
        this.controls2.push(c22);
        this.controls2.push(c23);
        this.controls2.push(c24);
        this.controls2.push(c25);
        this.controls2.push(c26);
        this.controls2.push(c27);
        this.controls2.push(c28);
       this.initValue2 = [
            { earnCode : "PTO - Standard",ptoEarnCode : "PTO101",code : "NAS101" ,defaultPay : "$14.25" ,minPay : "$14.25" ,maxPay : "$18.25" ,defaultBill : "$20.50" ,minBill : "$20.50" ,maxBill:"$24.50" },
        ];
    }
}
