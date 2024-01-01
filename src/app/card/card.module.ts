import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardPageRoutingModule } from './card-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListComponent } from './components/card-list/card-list.component';

import { CardService } from './shared/card.service';
import { LoaderService } from '../shared/service/loader.service';
import { ToastService } from '../shared/service/toast.service';
import { AlertService } from '../shared/service/alert.service';

@NgModule({
  imports: [IonicModule, CommonModule, CardPageRoutingModule, HttpClientModule],
  declarations: [CardDeckPage, CardListComponent],
  providers: [CardService, LoaderService, ToastService, AlertService],
})
export class CardPageModule {}
