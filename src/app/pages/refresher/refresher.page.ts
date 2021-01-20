import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atualizar(event) {
    console.log('Usuário solicitou atualização');
    setTimeout(() => {
      event.target.complete();
      console.log('Lista atualizada com sucesso');
    }, 2000);
  }

}
