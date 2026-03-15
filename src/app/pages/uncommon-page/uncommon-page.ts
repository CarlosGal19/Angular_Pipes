import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  // i18n Select Pipe
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

  // i18n Plural Pipe
  clients = signal<string[]>([
    'Maria',
    'Pedro',
    'Juan',
    'Federico',
    'Enrique',
    'Andrea',
    'Jonathan'
  ]);

  clientsMap = {
    '=0': 'No tenemos ningún cliente.',
    '=1': 'Tenemos un cliente esperando, espere su turno.',
    '=2': 'Tenemos dos clientes esperando, espere su turno.',
    other: 'Tenemos varios clientes esperando, espere su turno.'
  }

  removeClient() {
    this.clients.update((clients) => clients.slice(0, clients.length - 1))
  }
}
