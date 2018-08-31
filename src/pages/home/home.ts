import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { ConexionProvider } from '../../providers/conexion/conexion';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    news:any = [];
    
    constructor(public navCtrl: NavController, public provider:ConexionProvider, private iab: InAppBrowser, private callNumber: CallNumber) {
        
        
    }
    
    initRadio(){
        const browser = this.iab.create('http://online.mihttpstreaming.com:2199/start/lavozdemariasc/');
        browser.show();
    }

    callRlvm(){
        this.callNumber.callNumber("0960082900", true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }
    gotoChat(){
        const browser = this.iab.create('https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true');
        browser.show();
    }
doRefresh(refresher){
    setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
    }, 2000);
}

getdata(){
    this.provider.getArticles().subscribe(
      result=>{
          this.news= result.articles;
          console.log("Texto: " + this.news + "...");
          },
          
          error => {
              console.log("Texto: " + error);
          },  
          ()=> 
              {
                console.log("WELL DONE!");
          },  
      );
  }
  
  showNewsPage(article){
      this.navCtrl.push(
          NewsPage,
          {
              art : article
          }
          );    
  }
  
    ionViewDidEnter(){
      this.getdata();
  }

}
