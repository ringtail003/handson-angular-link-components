import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'simple-line-input',
  templateUrl: './simple-line-input.component.html',
  styleUrls: ['./simple-line-input.component.scss']
})
export class SimpleLineInputComponent implements OnInit, OnChanges {
  @Input() text: string = null;
  @Output() onTextChanged = new EventEmitter<string>();

  input: string = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { text?: SimpleChange }) {
    if (!changes.text) {
      return;
    }

    this.input = changes.text.currentValue;
  }

  onChanged() {
    this.onTextChanged.emit(this.input);
  }

}
