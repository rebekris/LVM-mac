import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ProgramacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programacion',
  templateUrl: 'programacion.html',
})
export class ProgramacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramacionPage');
  }
  irProg(){
    const browser = this.iab.create('https://lavozdemaria.ec/es/programaci%C3%B3n');
      browser.show();
    }
    callRlvm(){
      this.callNumber.callNumber("0960082900", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
