import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  id:string;
  constructor(
    private contactService: ContactsService,
    private modalCtrl: ModalController,
    private router: Router,
  ) { }
  ngOnInit() {
    // this.contacts = this.contactsService.getAllContacts();
  }

  ionViewWillEnter(){
    this.contacts = this.contactService.getAllContacts();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: AddModalComponent,
      componentProps: { selectedRecipe: this.contacts }
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data.message);
    });

    return await modal.present();
  }

  goBack(){
      this.router.navigateByUrl('/contacts')
  }

  priority(contact: Contact, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(contact.name , 'is set as priority contact.');
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }

}
