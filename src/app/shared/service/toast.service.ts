import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 4000,
    });
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
      cssClass: 'toast-error',
    });

    toast.present();
  }
}
