import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCardsComponent } from './red-cards.component';

describe('RedCardsComponent', () => {
  let component: RedCardsComponent;
  let fixture: ComponentFixture<RedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
