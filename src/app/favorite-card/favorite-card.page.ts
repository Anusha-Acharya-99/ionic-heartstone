import { Component } from '@angular/core';
import { FavoriteCardStore } from '../card/shared/favorite-card.stores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.page.html',
})
export class FavoriteCardPage {
  favoriteCards: any;
  favoriteCardSub!: Subscription;

  constructor(private favoriteCardStore: FavoriteCardStore) {
    this.favoriteCardSub = this.favoriteCardStore.favoriteCards.subscribe(
      (favoriteCards) => {
        this.favoriteCards = this.getFavoriteCards(favoriteCards);
      }
    );
  }

  getFavoriteCards(cards: any) {
    if (cards) {
      return Object.keys(cards).map((key) => {
        return cards[key];
      });
    }
    return [];
  }

  generateUrl(cardId: string) {
    return `/tabs/favorite-card/${cardId}`;
  }

  ionViewDidLeave() {
    if (this.favoriteCardSub && !this.favoriteCardSub.closed) {
      this.favoriteCardSub.unsubscribe();
    }
  }
}
