import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackService } from '../../providers/feedback-service/feedback-service';

@Component({
  selector: 'page-sent',
  templateUrl: 'sent.html'
})
export class SentPage {
  incitems:any;
  title1:any;

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
 
         this.feedbackService.GetSents(name1).then((result) => {
             this.incitems = result;
             console.log(this.incitems);
            
           }, (err) => {
             console.log(err);
           }); 
     }, 100);
  }
  
}
