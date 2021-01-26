import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent implements OnInit {

  nome: any;
  constructor(private navParams: NavParams) {
    this.nome = this.navParams.get('nome');
  }

  ngOnInit() {}

}
