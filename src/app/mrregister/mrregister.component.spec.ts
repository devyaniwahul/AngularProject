import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRRegisterComponent } from './mrregister.component';

describe('MRRegisterComponent', () => {
  let component: MRRegisterComponent;
  let fixture: ComponentFixture<MRRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
