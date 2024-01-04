import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FcmService } from './shared/service/fcm.service';
import { ToastService } from './shared/service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcmService: FcmService,
    private toastService: ToastService
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.storage.create();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private notificationSetup() {
    this.fcmService.getToken();
    this.fcmService.onNotification().subscribe((msg) => {
      this.toastService.presentToast(msg.body);
    });
  }
}
