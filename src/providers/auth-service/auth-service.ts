import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://213.153.171.81/WebApiFeedback/api/login/authenticate/';

@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  login(credentials) { 
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //console.log(JSON.stringify(credentials));
        console.log(credentials.password);
        this.http.get(apiUrl+credentials.username+"/"+credentials.password)
          .subscribe(res => {
            resolve(res.json());console.log(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}
