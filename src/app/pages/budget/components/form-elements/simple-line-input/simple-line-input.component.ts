import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'simple-line-input',
  templateUrl: './simple-line-input.component.html',
  styleUrls: ['./simple-line-input.component.scss'],
  viewProviders:[{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
})
export class SimpleLineInputComponent implements OnInit {
  @Input() name: string = null;

  constructor() { }

  ngOnInit() {
  }

}
