import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK']
    });
    alert.present();
  }

  async multipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    alert.present();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => console.log('Confirm Cancel: blah')
        },
        {
          text: 'Okay',
          handler: () => console.log('Confirm Okay')
        }
      ]
    });
    alert.present();
  }

  async prompt() {
    const alert = await this.alertCtrl.create({
      header: 'Acesso restrito!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu email'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        },
        // multiple input
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-02'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => console.log('Confirm Cancel')
        },
        {
          text: 'Ok',
          handler: (form) => console.log(form)
        }
      ]
    });
    alert.present();
  }

}
