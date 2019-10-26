import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'term-editor',
  templateUrl: './term-editor.component.html',
  styleUrls: ['./term-editor.component.scss'],
  viewProviders:[{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
})
export class TermEditorComponent implements OnInit {
  @Input() name: string = null;

  constructor() { }

  ngOnInit() {
  }
}
