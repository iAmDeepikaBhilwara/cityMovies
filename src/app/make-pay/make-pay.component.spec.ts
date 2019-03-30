import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePayComponent } from './make-pay.component';

describe('MakePayComponent', () => {
  let component: MakePayComponent;
  let fixture: ComponentFixture<MakePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
