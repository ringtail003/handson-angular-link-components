import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Term } from '../../../types/term';
import { ObjectCopy } from 'src/app/shared/utils';

@Component({
  selector: 'term-editor',
  templateUrl: './term-editor.component.html',
  styleUrls: ['./term-editor.component.scss']
})
export class TermEditorComponent implements OnInit, OnChanges {
  @Input() term: Term = null;
  @Output() onTermChanged = new EventEmitter<Term>();

  input: Term = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { term?: SimpleChange }) {
    if (!changes.term) {
      return;
    }

    this.input = ObjectCopy(changes.term.currentValue);
  }

  onChanged() {
    this.onTermChanged.emit(this.input);
  }

}
