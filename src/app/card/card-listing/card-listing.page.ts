import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { ICard } from '../shared/card.model';
import { FavoriteCardStore } from '../shared/favorite-card.stores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private favoriteCardStore: FavoriteCardStore
  ) {
    this.favoriteCardSub = this.favoriteCardStore.favoriteCards.subscribe(
      (favoriteCards) => {
        this.favoriteCards = favoriteCards;
      }
    );
  }

  cardDeckGroup: any = '';
  cardDeck: any = '';
  cards: any = [];
  copyOfCards: any = [];
  isLoading: boolean = false;
  favoriteCards: any = {};
  favoriteCardSub!: Subscription;

  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
    if (this.cards && this.cards.length === 0) this.getCardsByDeck();
  }

  async getCardsByDeck() {
    await this.loaderService.presentLoader();
    this.cardService
      .getCardsByDeck(this.cardDeckGroup, this.cardDeck)
      .subscribe({
        next: (cards) => {
          this.loaderService.dismissLoader();
          this.cards = cards.map((card) => {
            card.favorite = this.isFavoriteCard(card.cardId);
            return card;
          });
          this.copyOfCards = Array.from(this.cards);
        },
        error: () => {
          this.loaderService.dismissLoader();
          this.toastService.presentErrorToast('Something went wrong');
        },
      });
  }

  generateUrl(cardId: string) {
    return `/tabs/card/${cardId}`;
  }

  handleRefresh(event: any) {
    this.getCardsByDeck();
    event.target.complete();
  }

  hydratedCards(cards: any) {
    this.isLoading = false;
    this.cards = cards;
  }

  showSpinner() {
    this.isLoading = true;
  }

  toggleFavorite(card: ICard) {
    this.favoriteCardStore.toggleFavorite(card);
  }

  private isFavoriteCard(cardId: string) {
    const card = this.favoriteCards[cardId];
    return card ? true : false;
  }

  ionViewDidLeave() {
    if (this.favoriteCardSub && !this.favoriteCardSub.closed) {
      this.favoriteCardSub.unsubscribe;
    }
  }
}
