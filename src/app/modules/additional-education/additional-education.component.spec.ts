import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalEducationComponent } from './additional-education.component';

describe('AdditionalEducationComponent', () => {
  let component: AdditionalEducationComponent;
  let fixture: ComponentFixture<AdditionalEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
