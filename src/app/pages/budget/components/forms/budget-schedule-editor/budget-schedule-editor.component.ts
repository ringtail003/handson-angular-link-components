import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';

@Component({
  selector: 'budget-schedule-editor',
  templateUrl: './budget-schedule-editor.component.html',
  styleUrls: []
})
export class BudgetScheduleEditorComponent implements OnInit {
  @Input() accounts: Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
