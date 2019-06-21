import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmworksComponent } from './firmworks.component';

describe('FirmworksComponent', () => {
  let component: FirmworksComponent;
  let fixture: ComponentFixture<FirmworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
