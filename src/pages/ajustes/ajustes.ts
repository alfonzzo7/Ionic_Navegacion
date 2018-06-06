import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.pages';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  navegar(){
    this.navCtrl.parent.select(0);
  }

  abrirModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre:"Pedro", edad:33});
    modal.present();
    modal.onDidDismiss(params => {
      if(params){
        console.log(params);
      }
    });
  }

}
