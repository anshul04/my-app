import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersDetailsComponent } from './starters-details.component';

describe('StartersDetailsComponent', () => {
  let component: StartersDetailsComponent;
  let fixture: ComponentFixture<StartersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
