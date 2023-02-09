import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowCardsComponent } from './yellow-cards.component';

describe('YellowCardsComponent', () => {
  let component: YellowCardsComponent;
  let fixture: ComponentFixture<YellowCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
