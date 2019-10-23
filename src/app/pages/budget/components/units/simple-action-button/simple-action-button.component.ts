import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'simple-action-button',
  templateUrl: './simple-action-button.component.html',
  styleUrls: ['./simple-action-button.component.scss']
})
export class SimpleActionButtonComponent implements OnInit {
  @Input() label: string = null;
  @Input() disabled: boolean = false;
  @Output() onAction = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.onAction.emit();
  }

}
