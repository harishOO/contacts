import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { TestService } from '../test.service';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  contacts: any=[];
  constructor(public ac: AlertController, public srvc: TestService) {
    debugger
  }

  ngOnInit() {
    debugger
    this.getContactsList();
    // ...
  }

  getContactsList() {
    this.srvc.getContactsFromFirebase().subscribe(res => {
      let result = res
      for(var i in result){
        this.contacts.push(result[i]);
      }
    })

  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
  }

  addContact(name, number) {
    this.contacts.push({ name: name, num: number });
    this.presentAlert();
  }

  async presentAlert() {

    const alert = await this.ac.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Contact is added',
      buttons: ['OK']
    });

    await alert.present();
  }

}
