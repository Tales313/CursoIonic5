import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log('Scroll Started!');
  }

  logScrolling(e) {
    console.log(e);
  }

  logScrollEnd() {
    console.log('Scroll Ended');
  }

}
