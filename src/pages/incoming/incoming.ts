import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackService } from '../../providers/feedback-service/feedback-service';

@Component({
  selector: 'page-incoming',
  templateUrl: 'incoming.html'
})
export class incomingPage {
  incitems:any;
  title1:any;

  constructor(public navCtrl: NavController, public feedbackService: FeedbackService) {
    this.getir();


  }

  getir()
  {
    let name1 = localStorage.getItem('uname');
     /*  
      console.log(name1);
      let sonuc = this.feedbackService.GetIncomings(name1);
      this.incitems = sonuc;
      console.log("sonuc:"+sonuc); */

      setTimeout(() => {
        /*  event.component.items = this.getPorts().filter(port => {
             return port.name.toLowerCase().indexOf(text) !== -1 ||
                 port.country.toLowerCase().indexOf(text) !== -1;
         }); */
 
         this.feedbackService.GetIncomings(name1).then((result) => {
             this.incitems = result;
             this.title1 = "Gelen Feedback ";
             console.log(this.incitems);
            
           }, (err) => {
             console.log(err);
           }); 
     }, 100);


  }

  
}