import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController) {}

  ionViewCanLeave() {
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: 'Log out',
        subTitle: 'Are you sure you want to log out?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              reject();
            }
          },
          {
            text: 'Yes',
            handler: () => {
              alert.dismiss().then(() => {
                resolve();
              });
            }
          }
        ]
      });

      alert.present();
    });
  }

  logout() {
    this.navCtrl.pop();
  }
}
