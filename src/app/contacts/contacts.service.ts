import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'John Titor',
      imageUrl: 'https://miro.medium.com/max/400/1*CsHR2XvSOoJ3rC1GQLtLFQ.jpeg',
      email: ['johntitor@gmail.com','john_titor@yahoo.com'],
      telepon: ['08124567515','028564532154']
    },
    {
      id: 'c2',
      name: 'John Cena',
      imageUrl: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/23/914915-810529-johncena.jpg',
      email: ['johncena@gmail.com','john_cena@yahoo.com'],
      telepon: ['081226548234','08464332454']
    },
  ];
  constructor() { }

  getAllContacts(){
    return [...this.contacts];
  }
  getContact(contactId: string){
    return {...this.contacts.find(contact=>{
      return contact.id === contactId;
    })};
  }

  addContact(data:any){
    // console.log(data.value);
    // this.contacts.push(data);
    this.contacts.push(data.value);
    console.log(this.contacts);
  }
  
  editContact(data:any){
    console.log(data);
    const index = this.contacts.findIndex(pro => pro.id === data.id);

    // this.foto = product.value.foto.split(',');

    this.contacts[index].id = data.id;
    this.contacts[index].name = data.name;
    this.contacts[index].imageUrl = data.imageUrl;
    this.contacts[index].email = data.email;
    this.contacts[index].telepon = data.telepon;
  }

  deleteContact(contactId: string) {
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId;
    })
  }
}
