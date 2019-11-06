import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectorComponent } from './account-selector.component';
import { FormElementComponentModule } from '..';

describe('AccountSelectorComponent', () => {
  let component: AccountSelectorComponent;
  let fixture: ComponentFixture<AccountSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormElementComponentModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
