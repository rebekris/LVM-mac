import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  savedArticles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.savedArticles= this.navParams.get('art');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  share(){
  	let self= this;
  	let description = self.savedArticles.content;

  	this.socialSharing.share(description, 'Radio La Voz de María','', ' Encuentra más información en lavozdemaria.ec').then(function() {
	  console.log('Successful share');
	}).catch(function(error) {
	  console.log('Error sharing:', error)
	})     

  }

}
