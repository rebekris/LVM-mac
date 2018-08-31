import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

declare var google: any;

/**
 * Generated class for the ContactanosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactanos',
  templateUrl: 'contactanos.html',
})
export class ContactanosPage {
  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad(){
    this.showMap();
  }
  callRlvm(){
    this.callNumber.callNumber("0960082900", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
}
  
  showMap(){
    const location= new google.maps.LatLng(-2.1824565,-79.8930946);
  
    const options= {
        center: location,
        zoom: 14
    };
    
    const map= new google.maps.Map(this.mapRef.nativeElement, options);
    
    this.addMarker(location, map);
  }

    addMarker(position, map){
        return new google.maps.Marker({
            position,
            map
        });
    }

}
