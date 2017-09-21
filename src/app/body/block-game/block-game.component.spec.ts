import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGameComponent } from './block-game.component';

describe('BlockGameComponent', () => {
  let component: BlockGameComponent;
  let fixture: ComponentFixture<BlockGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
