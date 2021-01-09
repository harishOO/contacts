import { Component } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  contacts: any;
  constructor(public ac: AlertController) {
    this.contacts = [
      { name: "harish", num: "32423423424" },
      { name: "Soundarya", num: "134354546" },
      { name: "Anirudh", num: "898989" },
      { name: "Srita", num: "5656565" },
      { name: "Dhoni", num: "465465" },
      { name: "Jadeja", num: "8988" },
    ];
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
