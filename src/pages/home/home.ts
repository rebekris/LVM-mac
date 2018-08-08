import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { ConexionProvider } from '../../providers/conexion/conexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news:any = [];

  constructor(public navCtrl: NavController, public provider:ConexionProvider) {

  }
  doRefresh(refresher){
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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

}
