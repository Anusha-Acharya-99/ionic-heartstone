import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICard } from './card.model';

@Injectable()
export class FavoriteCardStore {
  constructor(private storage: Storage) {
    this.loadInitialData();
  }

  private _favoriteCards = new BehaviorSubject({});

  get favoriteCards(): Observable<any> {
    return this._favoriteCards.asObservable();
  }

  private loadInitialData() {
    this.storage.get('favoriteCards').then((favoriteCards) => {
      this._favoriteCards.next(favoriteCards || {});
    });
  }

  toggleFavorite(card: ICard) {
    const favoriteCards: any = this._favoriteCards.getValue();
    if (card.favorite) {
      card.favorite = false;
      delete favoriteCards[card.cardId];
    } else {
      card.favorite = true;
      favoriteCards[card.cardId] = card;
    }
    this.storage
      .set('favoriteCards', this.favoriteCards)
      .then((favoriteCards) => {
        this._favoriteCards.next(favoriteCards);
      });
  }
}
