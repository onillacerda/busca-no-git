import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStarComponent } from './body-star.component';

describe('BodyStarComponent', () => {
  let component: BodyStarComponent;
  let fixture: ComponentFixture<BodyStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
