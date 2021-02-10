import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Push, PushObject, PushOptions} from '@ionic-native/push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Componentes Visuais',
      url: 'componentes-visuais',
      icon: 'construct'
    },
    {
      title: 'Componentes Nativos',
      url: 'componentes-nativos',
      icon: 'construct'
    },
    {
      title: 'Api Externa',
      url: 'api',
      icon: 'construct'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push: Push
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeFirebase();
    });
  }

  private initializeFirebase() {
    const options: PushOptions = {
      android: {
        senderID: '1088347358894'
      }
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe(res => console.log(`${res.registrationId}`));
    pushObject.on('registration').subscribe(res => console.log(`Já chegou o disco voador: ${res.message}`));
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
