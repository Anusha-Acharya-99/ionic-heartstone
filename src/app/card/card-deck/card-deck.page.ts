import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';
import { ICardDeck } from '../shared/card.model';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.page.html',
  styleUrls: ['./card-deck.page.scss'],
})
export class CardDeckPage {
  constructor(private cardService: CardService) {
    this.getCardDecks();
  }
  public cardDecks: ICardDeck[] = [];

  private readonly allowedDecks = [
    'classes',
    'factions',
    'qualities',
    'types',
    'races',
  ];

  private getCardDecks() {
    this.cardService.getCardDecks().subscribe((cardDecks) => {
      this.extractAllowedDecks(cardDecks);
    });
  }

  extractAllowedDecks(cardDecks: ICardDeck[]) {
    this.allowedDecks.forEach((deckName: string) => {
      this.cardDecks.push({
        name: deckName,
        type: (cardDecks as { [key: string]: any })[deckName],
      });
    });
  }

  generateUrl(cardDeckGroup: string, cardDeck: string): string {
    return `tabs/card/${cardDeckGroup}/${cardDeck}`;
  }
}
