import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermEditorComponent } from './term-editor.component';

describe('TermEditorComponent', () => {
  let component: TermEditorComponent;
  let fixture: ComponentFixture<TermEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
