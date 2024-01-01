import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { ICard, ICardDeck } from './card.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CardService {
  constructor(private http: HttpClient) {}

  public readonly cardDecks: string[] = [
    'Druid',
    'Mage',
    'Warrior',
    'Rogue',
    'Shaman',
    'Priest',
    'Warlock',
    'Hunter',
    'Paladin',
  ];

  public baseUrl = environment.baseUrl;

  public getCardDecks(): Observable<ICardDeck[]> {
    return this.http.get<ICardDeck[]>(`${this.baseUrl}/info`);
  }

  public getCardsByDeck(
    cardDeckGroup: string,
    cardDeck: string
  ): Observable<ICard[]> {
    return this.http.get<ICard[]>(
      `${this.baseUrl}/cards/${cardDeckGroup}/${cardDeck}`
    );
  }

  public getCardById(cardId: string): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.baseUrl}/cards/${cardId}`);
  }
}
