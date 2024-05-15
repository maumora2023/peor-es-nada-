import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PubliFormComponent } from './publi-form.component';

describe('PubliFormComponent', () => {
  let component: PubliFormComponent;
  let fixture: ComponentFixture<PubliFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PubliFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PubliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
