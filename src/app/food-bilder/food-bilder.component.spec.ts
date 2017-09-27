import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBilderComponent } from './food-bilder.component';

describe('FoodBilderComponent', () => {
  let component: FoodBilderComponent;
  let fixture: ComponentFixture<FoodBilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
