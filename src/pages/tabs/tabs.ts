import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { createfdPage } from '../createfd/createfd';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { incomingPage} from '../incoming/incoming';
import { SentPage} from '../sent/sent';
import { WallPage} from '../wall/wall';
import { RequestfdPage} from '../requestfd/requestfd';

import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from '../../app/app.component';

// @NgModule({
//   declarations: [ MyApp ],
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(MyApp, {
//       backButtonText: 'Go Back',
//       iconMode: 'ios',
//       modalEnter: 'modal-slide-in',
//       modalLeave: 'modal-slide-out',
//       tabsPlacement: 'top',
//       pageTransition: 'ios-transition'
//     }, {}
//   )],
//   bootstrap: [IonicApp],
//   entryComponents: [ MyApp ],
//   providers: []
// })

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WallPage;
  tab2Root = createfdPage;
  tab3Root = incomingPage;
  tab4Root = SentPage;
  tab5Root = RequestfdPage;
  constructor() {

  }
}
