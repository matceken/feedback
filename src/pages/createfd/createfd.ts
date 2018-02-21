import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { InfiniteScroll } from 'ionic-angular';
import { SelectSearchable } from '../../components/select-searchable/select-searchable';
import { Port } from '../../types/types';
import { user } from '../../types/user';
import { feedback, feedbackRoot } from '../../types/feedback';
import { FeedbackService } from '../../providers/feedback-service/feedback-service';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-createfd',
  templateUrl: 'createfd.html'
})
export class createfdPage {

  /* ports: Port[];
  ports10: Port[];
  portNames: string[];
  port1: Port;
  port2: Port;
  port3: Port;
  port4: Port;
  port5: Port;
  port6: Port;
  port7: Port;
  port9: string = 'Vladivostok';
  port10: Port;
  form: FormGroup;
  port8Control: FormControl;
  ports10Page = 2; */
  toppings:any;
  tip:any;
  msg:any;
  user1:user;
  userssearch:user;
  usersall : user[];
  selecteduser :user;
  _feedback : feedback;
  _feedbackRoot:feedbackRoot;
  servicereturn:string;
  constructor(public navCtrl: NavController,
              //private formBuilder: FormBuilder,
              public feedbackService: FeedbackService,
              private alertCtrl: AlertController) {
   /*  this.ports = this.getPorts();
    this.portNames = this.getPorts().map(port => port.name);
    this.port2 = this.ports[1];
    this.port7 = this.ports[5];
    this.port8Control = this.formBuilder.control(this.ports[6], Validators.required);
    this.form = this.formBuilder.group({
        port8: this.port8Control
    });
    this.ports10 = this.getPorts(); */
    //this.Getusersall();
    
  }

  /*Getusersall()
  {
      this.feedbackService.Getusersall().then((result) => {
      this.usersall = result;
      console.log(this.usersall);
      if(this.usersall)
      {
       
      }
      else
      {

      }
    }, (err) => {
      console.log(err);
    }); 
  }*/

searchUsers(event: { component: SelectSearchable, text: string }) {
    let text = (event.text || '').trim().toLowerCase();

    if (!text) {
        event.component.items = [];
        return;
    } else if (event.text.length < 3) {
        return;
    }

    event.component.isSearching = true;

    // Simulate async operation.
    setTimeout(() => {
       /*  event.component.items = this.getPorts().filter(port => {
            return port.name.toLowerCase().indexOf(text) !== -1 ||
                port.country.toLowerCase().indexOf(text) !== -1;
        }); */

        this.feedbackService.Getusers(text).then((result) => {
            event.component.items = result as any[];
            console.log(event.component.items);
            if(this.usersall)
            {
             
            }
            else
            {
      
            }
          }, (err) => {
            console.log(err);
          }); 

        event.component.isSearching = false;
    }, 2000);
}

userChange(event: { component: SelectSearchable, value: any }) {
    this.selecteduser = event.value;
  console.log('value:', event.value);
}

SendFeedback(id: number) {
    if(!this.selecteduser)
    {
        this.alertt('Eksik Veri','Kullanıcı Seçiniz.','ok');
    }
    else if(!this.msg)
    {
        this.alertt('Eksik Veri','Mesaj Giriniz.','ok');
    }
    else if(!this.tip)
    {
        this.alertt('Eksik Veri','Tip Seçiniz.','ok'); 
    }
    else if(!this.toppings)
    {
        this.alertt('Eksik Veri','Değerlerimiz Seçiniz.','ok');
    } 
    else
    {
     console.log("user1:"+this.selecteduser.ADNAME);
    console.log("msg:"+this.msg);
    console.log("tip:"+this.tip);
    console.log("toppings:"+this.toppings); 

    this._feedback = new feedback();
    this._feedbackRoot = new feedbackRoot();

    this._feedback.FROM = localStorage.getItem('uname');
    this._feedback.TO=this.selecteduser.ADNAME;
    this._feedback.COMMENT = this.msg;
    this._feedback.TYPE = this.tip;

    this._feedbackRoot.t1 = this._feedback;
    this._feedbackRoot.toppings = this.toppings;

    //let _response =
    this.feedbackService.postFeedBack(this._feedbackRoot);
    this.alertt('Bilgi',"Oluşturuldu",'OK');

    //let prompt = 
    this.alertCtrl.create({
        title: 'Bilgi',
        message: "Oluşturuldu",
        buttons: [
          {
            text: 'OK',
            handler: data => {
              //this.navCtrl.push("../about/about");
              this.navCtrl.setRoot(AboutPage);
            }
          }
        ]
      });
      this.msg="";
      this.toppings=null;
      this.tip=null;
      this.selecteduser=null;

    //console.log("servicereturn:"+_response);

    /*if(_response)
    {
        this.alertt('if',_response,'ok');
    }
    else
    {
        this.alertt('else',_response,'ok');
    }*/

    }
    //this.feedbackService.postFeedBack();
}

alertt(baslik,icerik,btn)
{
    let alert = this.alertCtrl.create({
        title: baslik,
        subTitle: icerik,
        buttons: [btn]
      });
      alert.present();
}

/* reset() {
    this.port8Control.reset();
} */

}
