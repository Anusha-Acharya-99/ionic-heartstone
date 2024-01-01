import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderService {
  constructor(private loadingCtrl: LoadingController) {}

  private loader!: HTMLIonLoadingElement;

  public async presentLoader(): Promise<HTMLIonLoadingElement> {
    this.loader = await this.loadingCtrl.create({
      message: 'Loading',
      translucent: true,
    });
    this.loader.present();
    return this.loader;
  }

  public dismissLoader() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }
}
