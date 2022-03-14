import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BodyRepoComponent } from './body-repo.component';

describe('BodyRepoComponent', () => {
  let component: BodyRepoComponent;
  let fixture: ComponentFixture<BodyRepoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
