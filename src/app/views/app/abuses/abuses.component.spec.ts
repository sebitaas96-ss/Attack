import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbusesComponent } from './abuses.component';

describe('AbusesComponent', () => {
  let component: AbusesComponent;
  let fixture: ComponentFixture<AbusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
