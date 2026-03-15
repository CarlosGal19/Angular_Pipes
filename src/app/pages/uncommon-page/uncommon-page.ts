import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Carlos Galindo',
  gender: 'male',
  age: 21,
  address: 'Aguascalientes, Mexico'
}

const client2 = {
  name: 'Dhamar Rosales',
  gender: 'female',
  age: 18,
  address: 'San Francisco de los Romo, Mexico'
}

@Component({
  selector: 'uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if(this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
