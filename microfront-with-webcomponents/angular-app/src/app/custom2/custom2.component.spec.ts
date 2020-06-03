import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom2Component } from './custom2.component';

describe('Custom2Component', () => {
  let component: Custom2Component;
  let fixture: ComponentFixture<Custom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
