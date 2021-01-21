import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  opcaoSelecionada = 'cores';
  constructor() { }

  ngOnInit() {
  }

  selecionar(event) {
    this.opcaoSelecionada = event.detail.value;
  }

}
