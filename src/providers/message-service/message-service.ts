import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {
  private url:string = "http://213.153.171.81/WebApiFeedback/api/login/authenticate/ADMIN/admin";

  constructor(private http: Http) {
    console.log('Hello MessageServiceProvider Provider');
  }

  getMessages()
  {
    return this.http.get(this.url)
    .do(res=>console.log(res));
    
  }
  getUsers(ui,psw) {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
