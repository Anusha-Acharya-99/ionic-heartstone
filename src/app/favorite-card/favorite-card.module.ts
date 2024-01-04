import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FavoriteCardRoutingModule } from './favorite-card-routing.module';

import { FavoriteCardPage } from './favorite-card.page';

import { FavoriteCardStore } from '../card/shared/favorite-card.stores';
import { CardPageModule } from '../card/card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FavoriteCardRoutingModule,
    CardPageModule,
  ],
  declarations: [FavoriteCardPage],
  providers: [FavoriteCardStore],
})
export class FavoriteCardPageModule {}
