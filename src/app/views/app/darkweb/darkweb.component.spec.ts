import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkwebComponent } from './darkweb.component';

describe('DarkwebComponent', () => {
  let component: DarkwebComponent;
  let fixture: ComponentFixture<DarkwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
