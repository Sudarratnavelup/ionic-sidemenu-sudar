import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'material-icons/iconfont/material-icons.scss';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: any;
  constructor(public navCtrl: NavController, private storage: Storage) {
    console.log('done');
  
  }

  savedate(title) {
    console.log(title);
    this.storage.set('name', title);
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });


  }

}
