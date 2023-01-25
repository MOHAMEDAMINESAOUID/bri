import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTComponent } from './service-t.component';

describe('ServiceTComponent', () => {
  let component: ServiceTComponent;
  let fixture: ComponentFixture<ServiceTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
