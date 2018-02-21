import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { createfdPage } from '../pages/createfd/createfd';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { incomingPage} from '../pages/incoming/incoming';
import { SentPage} from '../pages/sent/sent';
import { WallPage} from '../pages/wall/wall';
import { RequestfdPage} from '../pages/requestfd/requestfd';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MessageServiceProvider } from '../providers/message-service/message-service';
import { AuthService } from '../providers/auth-service/auth-service'; 
import { SelectSearchableModule } from '../components/select-searchable/select-searchable-module';
import { FeedbackService } from '../providers/feedback-service/feedback-service';
 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    createfdPage,
    incomingPage,
    SentPage,
    WallPage,
    RequestfdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SelectSearchableModule 
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    createfdPage,
    incomingPage,
    SentPage,
    WallPage,
    RequestfdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageServiceProvider,
    AuthService,
    FeedbackService
  ]
})
export class AppModule {}
