import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../shared/card.service';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage {
  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private alertService: AlertService
  ) {}

  cardId: any;
  cardDetail: any;

  ionViewWillEnter() {
    this.cardId = this.route.snapshot.paramMap.get('cardId');
    this.getCardById();
  }

  async getCardById() {
    await this.loaderService.presentLoader();
    this.cardService.getCardById(this.cardId).subscribe({
      next: (cardDetail) => {
        this.loaderService.dismissLoader();
        this.cardDetail = cardDetail[0];
        this.alertService.presentAlert(
          'Connection timed out. Please reload the page'
        );
      },
      error: () => {
        this.loaderService.dismissLoader();
        this.toastService.presentErrorToast('Something went wrong');
      },
    });
  }

  updateImage(e: any) {
    this.cardDetail.img = '/assets/images/Alliance.png';
  }

  handleRefresh(event: any) {
    this.getCardById();
    event.target.complete();
  }
}
