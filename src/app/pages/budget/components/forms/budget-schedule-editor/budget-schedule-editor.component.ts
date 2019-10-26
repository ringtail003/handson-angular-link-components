import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { Account } from 'src/app/pages/budget/types/account';
import { Term, factory as termFactory } from '../../../types/term';
import { BudgetSchedule } from '../../../types/budget-schedule';
import { ObjectCopy } from 'src/app/shared/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as CustomValidators from '../../../validators';

@Component({
  selector: 'budget-schedule-editor',
  templateUrl: './budget-schedule-editor.component.html',
  styleUrls: ['./budget-schedule-editor.component.scss'],
})
export class BudgetScheduleEditorComponent implements OnInit, OnChanges {
  @Input() accounts: Account[] = [];
  @Input() budgetSchedule: BudgetSchedule = null;
  @Output() onSave = new EventEmitter<BudgetSchedule>();

  labels = {
    save: '保存'
  } as const;

  $form: FormGroup = null;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.$form = this.fb.group({
      name: [this.budgetSchedule.name, Validators.required],
      term: this.fb.group({
        start: [this.budgetSchedule.term.start, Validators.required],
        end: [this.budgetSchedule.term.end, Validators.required],
      }, { validators: CustomValidators.termRange }),
      budgets: this.fb.array([], CustomValidators.arrayLength),
    });

    this.$form.valueChanges.subscribe(form => console.info('form changed:', this.$form));
  }

  ngOnChanges(changes: { budgetSchedule?: SimpleChange }) {
    if (!changes.budgetSchedule) {
      return;
    }

    this.budgetSchedule = ObjectCopy(this.budgetSchedule);
  }

  handleSaveAction() {
    this.onSave.emit(this.budgetSchedule);
  }

  hasError(name: string, validationKey: string): boolean {
    return (this.$form.controls[name].errors || {})[validationKey] || false;
  }

}
