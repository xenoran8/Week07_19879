import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController  
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss({message: "cancel"}, 'cancel');
  }

  onAdd(){
    console.log("add data");
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'New Contact Added!'}, 'Added');
      this.presentToast();
    });
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New Contact Added!',
      duration: 1000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Adding contact...',
      duration: 2000
    });
    await loading.present();

    const { role,data } = await loading.onDidDismiss();
  }
}
