import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePComponent } from './service-p.component';

describe('ServicePComponent', () => {
  let component: ServicePComponent;
  let fixture: ComponentFixture<ServicePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
