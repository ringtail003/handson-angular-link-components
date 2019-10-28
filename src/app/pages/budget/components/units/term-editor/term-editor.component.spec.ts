import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermEditorComponent } from './term-editor.component';
import { UnitComponentModule } from '..';

describe('TermEditorComponent', () => {
  let component: TermEditorComponent;
  let fixture: ComponentFixture<TermEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UnitComponentModule ],
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
