import { Component, OnInit } from '@angular/core';
import {CepService} from '../../services/cep.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  cep = '58077064';
  resultado: any = {cep: '', logradouro: ''};
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  consultarCep() {
    this.cepService.obterEndereco(this.cep).then((response) => {
      console.log(response);
      this.resultado = response;
    }).catch((e) => {
      console.log(e);
    });
  }

}
