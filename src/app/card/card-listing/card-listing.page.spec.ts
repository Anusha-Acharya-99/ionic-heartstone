import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListingPage } from './card-listing.page';

describe('CardListingPage', () => {
  let component: CardListingPage;
  let fixture: ComponentFixture<CardListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
