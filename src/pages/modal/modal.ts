import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.nombre = navParams.get("nombre");
    this.edad = navParams.get("edad");
    console.log(this.nombre, this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParams(){
    let data = {
      nombre: "Juan",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  cerrarSinParams(){
    this.viewCtrl.dismiss();
  }

}
