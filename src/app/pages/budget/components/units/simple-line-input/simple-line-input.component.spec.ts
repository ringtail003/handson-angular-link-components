import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLineInputComponent } from './simple-line-input.component';
import { UnitComponentModule } from '..';
import { FormGroupDirective, FormGroup, ControlContainer, FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SimpleLineInputComponent', () => {
  let component: SimpleLineInputComponent;
  let fixture: ComponentFixture<SimpleLineInputComponent>;

  beforeEach(async(() => {
    let mockDirective = new FormGroupDirective([], []);
    mockDirective.form = new FormGroup({
      foo: new FormControl(),
    });

    TestBed.configureTestingModule({
      imports: [ UnitComponentModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {
          provide: ControlContainer,
          useValue: mockDirective,
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLineInputComponent);
    component = fixture.componentInstance;
    component.name = 'foo';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
