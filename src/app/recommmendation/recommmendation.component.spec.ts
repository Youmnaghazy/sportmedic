import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommmendationComponent } from './recommmendation.component';

describe('RecommmendationComponent', () => {
  let component: RecommmendationComponent;
  let fixture: ComponentFixture<RecommmendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommmendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommmendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
