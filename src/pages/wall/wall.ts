import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackService } from '../../providers/feedback-service/feedback-service';

@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html'
})
export class WallPage {
  incitems:any;
  title1:any;
  page:number=1;
  perpage:0;
  totalData:0;
  totalPage:0;
  data:any;

  constructor(public navCtrl: NavController, public feedbackService: FeedbackService) {
    this.getir();
  }

  getir()
  {
    let name1 = localStorage.getItem('uname');

      setTimeout(() => {
        /*  event.component.items = this.getPorts().filter(port => {
             return port.name.toLowerCase().indexOf(text) !== -1 ||
                 port.country.toLowerCase().indexOf(text) !== -1;
         }); */
 
         this.feedbackService.GetWall(name1,this.page).then((result) => {
             this.incitems = result;
             console.log(this.incitems);
            
           }, (err) => {
             console.log(err);
           }); 
     }, 100);
  }

  doInfinite(infiniteScroll) {
    let name1 = localStorage.getItem('uname');
    this.page = this.page + 1;
    setTimeout(() => {
      /*  event.component.items = this.getPorts().filter(port => {
           return port.name.toLowerCase().indexOf(text) !== -1 ||
               port.country.toLowerCase().indexOf(text) !== -1;
       }); */

       this.feedbackService.GetWall(name1,this.page).then((result) => {
           //this.incitems = result;
           this.data=result;
           for(let i=0; i<this.data.length; i++) {
              this.incitems.push(this.data[i]);
           }
           console.log(this.incitems);
          
         }, (err) => {
           console.log(err);
         }); 
         infiniteScroll.complete();
   }, 100);
  
  }

  doInfinite1() {
    let name1 = localStorage.getItem('uname');
    this.page = this.page + 1;
    setTimeout(() => {
      /*  event.component.items = this.getPorts().filter(port => {
           return port.name.toLowerCase().indexOf(text) !== -1 ||
               port.country.toLowerCase().indexOf(text) !== -1;
       }); */

       this.feedbackService.GetWall(name1,this.page).then((result) => {
           //this.incitems = result;
           this.data=result;
           for(let i=0; i<this.data.length; i++) {
              this.incitems.push(this.data[i]);
           }
           console.log(this.incitems);
          
         }, (err) => {
           console.log(err);
         }); 
         
   }, 100);
  
  }
  
}
