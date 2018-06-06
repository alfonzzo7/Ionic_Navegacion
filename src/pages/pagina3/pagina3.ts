import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.mutante = navParams.get("mutante");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  atras(){
    this.navCtrl.pop();
  }

  root(){
    this.navCtrl.popToRoot();
  }

}
