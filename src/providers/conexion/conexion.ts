import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConexionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConexionProvider {
  public headers = new Headers();
  public options;

  constructor(public http: Http) {
    console.log('Hello PruebaProvider Provider');
    this.headers.append('x-api-key', '5BN6APZSY5X7L8XEH9S4');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //'Access-Control-Allow-Origin': '*'
    this.options = new RequestOptions({ headers: this.headers });
  }

  get(module){
    
    let res=this.http.get(module).map(
      res => res.json()
    );
    return res;
  }

  getArticles()
  {
    let url = "https://lavozdemaria.ec/end/get/content/tagarticles?tagid=2";
    let res=this.http.get(url).map(
      res => res.json()
    );
    console.log("actually url: "+ url);
    console.log(res);
    return res;
  }


}
