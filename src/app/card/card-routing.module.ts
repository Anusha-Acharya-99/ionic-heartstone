import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDeckPage } from './card-deck/card-deck.page';

const routes: Routes = [
  { path: '', component: CardDeckPage },
  {
    path: ':cardDeckGroup/:cardDeck',
    loadChildren: () =>
      import('../card/card-listing/card-listing.module').then(
        (m) => m.CardListingPageModule
      ),
  },
  {
    path: ':cardId',
    loadChildren: () =>
      import('./card-detail/card-detail.module').then(
        (m) => m.CardDetailPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CardPageRoutingModule {}
