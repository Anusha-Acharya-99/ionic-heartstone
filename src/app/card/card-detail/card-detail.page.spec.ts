import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailPage } from './card-detail.page';

describe('CardDetailPage', () => {
  let component: CardDetailPage;
  let fixture: ComponentFixture<CardDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
