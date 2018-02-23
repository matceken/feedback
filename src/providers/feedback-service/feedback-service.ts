import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions,Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { feedback, feedbackRoot } from '../../types/feedback';

let url_Getusersall = 'http://213.153.171.81/WebApiFeedback/api/Operation/Getusersall';
let url_Getusers = 'http://213.153.171.81/WebApiFeedback/api/Operation/Getusers/';
/*
  Generated class for the FeedbackServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackService {
  returndeg:string;
  constructor(public http: Http) {
    console.log('Hello FeedbackServiceProvider Provider');
  }

  Getusersall() { 
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //console.log(JSON.stringify(credentials));
        console.log("Getusersall");
        this.http.get(url_Getusersall)
          .subscribe(res => {
            resolve(res.json());console.log(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  Getusers(text1) { 
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('charset', 'UTF-8');
        //console.log(JSON.stringify(credentials));
        console.log("Getusersall");
        this.http.get(url_Getusers+text1)
          .subscribe(res => {
            resolve(res.json());console.log(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  GetIncomings(text1) { 
     return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('charset', 'UTF-8');
        //console.log(JSON.stringify(credentials));
        let url = 'http://213.153.171.81/WebApiFeedback/api/Operation/getIncomings/'+text1;
        console.log("GetIncomings "+url);
        this.http.get(url)
          .subscribe(res => {
            resolve(res.json());console.log(res);
          }, (err) => {
            reject(err);
          });
    }); 

  

       /*    this.http.get('http://213.153.171.81/WebApiFeedback/api/Operation/getIncomings/'+text1)
          .map(res => res.json())
          .subscribe(data => {
            console.log("d:"+data);
            return data;
        }); */


  }

  GetSents(text1) { 
    return new Promise((resolve, reject) => {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('charset', 'UTF-8');
       //console.log(JSON.stringify(credentials));
       let url = 'http://213.153.171.81/WebApiFeedback/api/Operation/GetSents/'+text1;
       console.log("GetSents "+url);
       this.http.get(url)
         .subscribe(res => {
           resolve(res.json());console.log(res);
         }, (err) => {
           reject(err);
         });
   }); 
  }

  GetWall(text1,page) { 
    return new Promise((resolve, reject) => {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('charset', 'UTF-8');
       //console.log(JSON.stringify(credentials));
       let url = 'http://213.153.171.81/WebApiFeedback/api/Operation/GetWall/'+text1+"/"+page;
       console.log("GetWall "+url);
       this.http.get(url)
         .subscribe(res => {
           resolve(res.json());console.log(res);
         }, (err) => {
           reject(err);
         });
   }); 
  }

  postFeedBack(_feedbackRoot:feedbackRoot)
  {
   
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
      let options = new RequestOptions({ headers: headers });
      
      let data = JSON.stringify(_feedbackRoot);
      console.log(data);
      
     /*  return new Promise((resolve, reject) => {
        this.http.post('http://213.153.171.81/WebApiFeedback/api/Operation/SendFeedback', data, options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response : ', response.json());
          resolve(response.json());
          console.log('API Response : ', response);
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        
        });
      }); */

      return this.http.post('http://213.153.171.81/WebApiFeedback/api/Operation/SendFeedback', data,options)
      .subscribe(data => {
        console.log("sdata:"+data);
        console.log("sdata json:"+data.json());
        this.returndeg = data.json();
        //return data.json();
       }, error => {
        console.log(error);// Error getting the data
        //return error;
      });
    //return this.returndeg;

  }

  postFeedBack1()
  {

    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
      let options = new RequestOptions({ headers: headers });
      
      let data = JSON.stringify({
        mesaj: 'Mesajım Var',
        konu: 'konulu'
      });
      
      return new Promise((resolve, reject) => {
        this.http.post('http://213.153.171.81/WebApiFeedback/api/Operation/SendFeedback1', data, options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response : ', response.json());
          resolve(response.json());
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });

  }

}
