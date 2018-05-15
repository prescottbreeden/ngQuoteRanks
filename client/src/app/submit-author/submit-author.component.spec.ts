import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAuthorComponent } from './submit-author.component';

describe('SubmitAuthorComponent', () => {
  let component: SubmitAuthorComponent;
  let fixture: ComponentFixture<SubmitAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
