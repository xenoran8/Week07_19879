import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  loadedContact: Contact;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastController: ToastController) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contactId')) {
        return;
      }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContact(contactId);
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/contacts');
    // this.navCtrl.navigateForward('/contacts');
  }

  deleteContact() {
    this.contactsService.deleteContact(this.loadedContact.id);
    this.router.navigate(['./contacts']);
    this.presentToast();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Kontak',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteContact()
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Kontak dihapus',
      color: "warning",
      duration: 3000
    });
    await toast.present();
  }

}
