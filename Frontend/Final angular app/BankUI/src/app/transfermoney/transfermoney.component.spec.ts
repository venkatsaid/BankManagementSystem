import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfermoneyComponent } from './transfermoney.component';

describe('TransfermoneyComponent', () => {
  let component: TransfermoneyComponent;
  let fixture: ComponentFixture<TransfermoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfermoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfermoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
