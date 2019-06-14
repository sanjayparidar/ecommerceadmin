import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontactusComponent } from './updatecontactus.component';

describe('UpdatecontactusComponent', () => {
  let component: UpdatecontactusComponent;
  let fixture: ComponentFixture<UpdatecontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
