import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ModalInternoComponent} from '../../components/modal-interno/modal-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(e: any) {
    const popover = await this.popoverCtrl.create({
      component: ModalInternoComponent,
      event: e,
      translucent: true,
      componentProps: {nome: 'Tales Araujo'}
    });
    popover.present();
  }

}
