import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'paper-plane'
    },
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct'
    },
    {
      title: 'Alert',
      url: 'alert',
      icon: 'construct'
    },
    {
      title: 'Action Sheet',
      url: 'actionsheet',
      icon: 'construct'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'construct'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'construct'
    },
    {
      title: 'Checkbox',
      url: 'checkobx',
      icon: 'construct'
    },
    {
      title: 'Chip',
      url: 'chip',
      icon: 'construct'
    },
    {
      title: 'Content',
      url: 'content',
      icon: 'construct'
    },
    {
      title: 'Datetime',
      url: 'datetime',
      icon: 'construct'
    },
    {
      title: 'Fab',
      url: 'fab',
      icon: 'construct'
    },
    {
      title: 'Grid',
      url: 'grid',
      icon: 'construct'
    },
    {
      title: 'Infinite Scroll',
      url: 'infinitescroll',
      icon: 'construct'
    },
    {
      title: 'Input',
      url: 'input',
      icon: 'construct'
    },
    {
      title: 'List',
      url: 'list',
      icon: 'construct'
    },
    {
      title: 'Progress Bar',
      url: 'progressbar',
      icon: 'construct'
    },
    {
      title: 'Refresher',
      url: 'refresher',
      icon: 'construct'
    },
    {
      title: 'Reorder',
      url: 'reorder',
      icon: 'construct'
    },
    {
      title: 'Select',
      url: 'select',
      icon: 'construct'
    },
    {
      title: 'Toggle',
      url: 'toggle',
      icon: 'construct'
    },
    {
      title: 'Search Bar',
      url: 'searchbar',
      icon: 'construct'
    },
    {
      title: 'Segment',
      url: 'segment',
      icon: 'construct'
    },
    {
      title: 'Slides',
      url: 'slides',
      icon: 'construct'
    },
    {
      title: 'Toast',
      url: 'toast',
      icon: 'construct'
    },
    {
      title: 'Modal',
      url: 'modal',
      icon: 'construct'
    },
    {
      title: 'Popover',
      url: 'popover',
      icon: 'construct'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
