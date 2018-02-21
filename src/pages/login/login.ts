import { Component } from '@angular/core';
import { NavController , LoadingController, ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
// import { MessageServiceProvider} from '../..//providers/message-service/message-service'
import { AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html' 
})


export class LoginPage {
  public people: any;
  loading: any;
  loginData = { username:'', password:'' };
  data: any;


 constructor(public navCtrl: NavController,
            private alertCtrl: AlertController, public authService: AuthService, 
            public loadingCtrl: LoadingController, private toastCtrl: ToastController)
 {
   //this.getMessagesx();
 }


 doLogin() {
   this.showLoader();
   this.authService.login(this.loginData).then((result) => {
    this.loading.dismiss();
    this.data = result;
    //console.log(this.data);
    if(this.data)
    {
      localStorage.setItem('token', this.data.access_token);
      localStorage.setItem('uname',this.loginData.username);
      this.navCtrl.setRoot(TabsPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Giriş Hatası',
        subTitle: 'Kullanıcı Adı veya Şifre Yanlış.',
        buttons: ['ok']
      });
      alert.present();
    }
  }, (err) => {
    this.loading.dismiss();
    this.presentToast(err);
  }); 
}

/* register() {
  this.navCtrl.push(RegisterPage);
} */

showLoader(){
  this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
  });

  this.loading.present();
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

 getMessagesx()
 {
   //this.messageService.getMessages().subscribe(data=>console.log(data));
   //document.getElementById("label1").textContent = "Muzaffer a";
  
 }

  /* LoginControl()
  {
    console.log("LoginControlxx");

    this.messageService.getUsers().then(data=>{this.people=data});

    if(this.people == null)
    {
      let alert = this.alertCtrl.create({
        title: 'Giriş Hatası',
        subTitle: 'Kullanıcı Adı veya Şifre Yanlış.',
        buttons: ['ok']
      });
      alert.present();
    }
    else
    {
      this.navCtrl.push(TabsPage);
    }
   
  } */

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
