import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { createfdPage } from '../createfd/createfd';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

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

  tab1Root = HomePage;
  tab2Root = createfdPage;
  tab3Root = AboutPage;
  tab4Root = createfdPage;
  tab5Root = ContactPage;
  constructor() {

  }
}
