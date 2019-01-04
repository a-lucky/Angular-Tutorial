import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestableTestComponent } from './nestable-test.component';

describe('NestableTestComponent', () => {
  let component: NestableTestComponent;
  let fixture: ComponentFixture<NestableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
