import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleActionButtonComponent } from './simple-action-button.component';

describe('SimpleActionButtonComponent', () => {
  let component: SimpleActionButtonComponent;
  let fixture: ComponentFixture<SimpleActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
