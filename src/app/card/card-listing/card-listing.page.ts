import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';

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
    private toastService: ToastService
  ) {}

  cardDeckGroup: any = '';
  cardDeck: any = '';
  cards: any = [];

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
          this.cards = cards;
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
}
