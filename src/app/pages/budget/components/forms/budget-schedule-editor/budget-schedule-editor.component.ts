import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { Term } from '../../../types/term';

@Component({
  selector: 'budget-schedule-editor',
  templateUrl: './budget-schedule-editor.component.html',
  styleUrls: []
})
export class BudgetScheduleEditorComponent implements OnInit {
  @Input() accounts: Account[] = [];

  term: Term = {start: null, end: null};

  constructor() { }

  ngOnInit() {
  }

  handleTermChanged() {
    // WIP
  }

}
