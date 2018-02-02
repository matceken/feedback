import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

class Port {
  public id: number;
  public name: string;
  public country: string;
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    ports: Port[];
    port: Port;

  constructor(public navCtrl: NavController) {
    this.ports = [
      { id: 0, name: 'Tokai', country: 'Japan' },
      { id: 1, name: 'Vladivostok', country: 'Russia' },
      { id: 2, name: 'Navlakhi', country: 'India' }
      ];
  }

  //portChange(event: { component: SelectSearchable, value: any }) {
  //  console.log('value:', event.value);
//}

}
