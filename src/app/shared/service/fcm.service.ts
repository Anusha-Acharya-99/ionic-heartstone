import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Firestore, addDoc, doc } from '@angular/fire/firestore';
import { collection, setDoc } from '@firebase/firestore';

@Injectable()
export class FcmService {
  constructor(
    private platform: Platform,
    private firebase: Firebase,
    private fireStore: Firestore
  ) {}

  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }
    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    this.saveToken(token);
  }

  saveToken(token: any) {
    if (!token) return;

    const devicesRef = collection(this.fireStore, 'devices');

    const data = {
      token,
      userId: 'testUserId',
    };

    return addDoc(devicesRef, data);
  }

  onNotification() {
    return this.firebase.onNotificationOpen();
  }
}
