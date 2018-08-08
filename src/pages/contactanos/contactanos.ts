import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.showMap();
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
