import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PubliListComponent } from './publi-list.component';

describe('PubliListComponent', () => {
  let component: PubliListComponent;
  let fixture: ComponentFixture<PubliListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PubliListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PubliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
