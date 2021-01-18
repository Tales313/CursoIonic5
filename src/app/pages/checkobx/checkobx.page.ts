import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkobx',
  templateUrl: './checkobx.page.html',
  styleUrls: ['./checkobx.page.scss'],
})
export class CheckobxPage implements OnInit {

  meses: any[] = [
    {nomeDoMes: 'Janeiro', valor: 1, marcado: false},
    {nomeDoMes: 'Fevereiro', valor: 2, marcado: true},
    {nomeDoMes: 'Março', valor: 3, marcado: false},
    {nomeDoMes: 'Abril', valor: 4, marcado: false},
    {nomeDoMes: 'Maio', valor: 5, marcado: false},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses() {
    console.log(this.meses);
  }

}
