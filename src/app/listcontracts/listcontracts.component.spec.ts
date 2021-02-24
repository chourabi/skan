import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontractsComponent } from './listcontracts.component';

describe('ListcontractsComponent', () => {
  let component: ListcontractsComponent;
  let fixture: ComponentFixture<ListcontractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
