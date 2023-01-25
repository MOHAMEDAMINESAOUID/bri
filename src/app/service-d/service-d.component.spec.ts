import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDComponent } from './service-d.component';

describe('ServiceDComponent', () => {
  let component: ServiceDComponent;
  let fixture: ComponentFixture<ServiceDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
