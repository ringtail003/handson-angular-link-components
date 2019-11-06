import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementComponentModule } from '..';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DateTime } from 'luxon';

@Component({
  template: `
    <form [formGroup]="$form">
      <term-editor [name]="'foo'"></term-editor>
    </form>
  `
})
class MockContainerComponent implements OnInit {
  $form: FormGroup = null;

  ngOnInit() {
    this.$form = new FormGroup({
      foo: new FormGroup({
        start: new FormControl(DateTime.fromISO('2019-11-01').toISODate()),
        end: new FormControl(DateTime.fromISO('2019-12-12').toISODate()),
      })
    });
  }
}

describe('TermEditorComponent', () => {
  let component: MockContainerComponent;
  let fixture: ComponentFixture<MockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormElementComponentModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        MockContainerComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display value', () => {
    expect(fixture.debugElement.query(By.css('input[formcontrolname="start"]')).nativeElement.value).toBe('2019-11-01');
    expect(fixture.debugElement.query(By.css('input[formcontrolname="end"]')).nativeElement.value).toBe('2019-12-12');
  });
});
