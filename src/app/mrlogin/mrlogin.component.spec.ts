import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRloginComponent } from './mrlogin.component';

describe('MRloginComponent', () => {
  let component: MRloginComponent;
  let fixture: ComponentFixture<MRloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
