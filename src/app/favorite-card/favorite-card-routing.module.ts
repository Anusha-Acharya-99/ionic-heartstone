import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCardPage } from './favorite-card.page';

const routes: Routes = [
  { path: '', component: FavoriteCardPage },
  {
    path: ':cardId',
    loadChildren: () =>
      import('../card/card-detail/card-detail.module').then(
        (m) => m.CardDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteCardRoutingModule {}
