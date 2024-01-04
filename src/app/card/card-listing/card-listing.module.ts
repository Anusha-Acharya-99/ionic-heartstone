import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardListingPageRoutingModule } from './card-listing-routing.module';

import { CardListingPage } from './card-listing.page';
import { SearchComponent } from 'src/app/shared/component/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListingPageRoutingModule,
  ],
  declarations: [CardListingPage, SearchComponent],
})
export class CardListingPageModule {}
