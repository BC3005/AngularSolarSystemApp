import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodidetailsComponent } from './bodidetails.component';

describe('BodidetailsComponent', () => {
  let component: BodidetailsComponent;
  let fixture: ComponentFixture<BodidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodidetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
