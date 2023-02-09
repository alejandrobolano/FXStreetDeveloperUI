import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsResponseComponent } from './cards-response.component';

describe('CardsComponent', () => {
  let component: CardsResponseComponent;
  let fixture: ComponentFixture<CardsResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
