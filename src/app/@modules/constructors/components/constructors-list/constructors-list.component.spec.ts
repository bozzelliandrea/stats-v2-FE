import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsListComponent } from './constructors-list.component';

describe('ConstructorsListComponent', () => {
  let component: ConstructorsListComponent;
  let fixture: ComponentFixture<ConstructorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
