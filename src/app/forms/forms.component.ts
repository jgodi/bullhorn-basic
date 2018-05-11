import { Component, OnInit } from '@angular/core';

import { MockMeta } from './forms-meta';
import { FormUtils } from "novo-elements";


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  private dynamic: any;
  private dynamicForm: any;

  constructor(private formUtils: FormUtils) {
    this.dynamic = formUtils.toFieldSets(
      MockMeta,
      '$ USD',
      {},
      { token: 'TOKEN', military: true },
    );

    this.dynamicForm = formUtils.toFormGroupFromFieldset(this.dynamic);
  }

  ngOnInit() {
  }

}
