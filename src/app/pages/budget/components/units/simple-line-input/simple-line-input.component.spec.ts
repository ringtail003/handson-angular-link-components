import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLineInputComponent } from './simple-line-input.component';
import { UnitComponentModule } from '..';

describe('SimpleLineInputComponent', () => {
  let component: SimpleLineInputComponent;
  let fixture: ComponentFixture<SimpleLineInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UnitComponentModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
