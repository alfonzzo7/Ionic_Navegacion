import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.pages';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes:any[] = [
    {
      nombre:"Magneto",
      poder:"Controlar metales"
    },
    {
      nombre:"Wolverine",
      poder:"Regeneración acelerada"
    },
    {
      nombre:"Profesor X",
      poder:"Poderes psíquicos"
    }
  ];

  pagina3:any = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  navegar(mutante:any){
    this.navCtrl.push(Pagina3Page, {'mutante': mutante});
  }

}
