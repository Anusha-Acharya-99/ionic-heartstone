export interface ICardDeck {
  name: string;
  type: string[];
}

export interface ICard {
  artist: string;
  attack: number;
  cardClass: string;
  collectible: boolean;
  cost: number;
  dbfId: number;
  flavor: string;
  faction: string;
  cardId: string;
  mechanics: string[];
  name: string;
  rarity: string;
  set: string;
  text: string;
  type: string;
  health: number;
  race: string;
}
