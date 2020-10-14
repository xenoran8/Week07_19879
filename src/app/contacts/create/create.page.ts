import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {


  constructor(
    private contactService: ContactsService,
    private router: Router,
  ) { 

  }

  ngOnInit() {
  }

  onCreate(){
    // console.log('onLogin');
  }

  onSubmit(form: NgForm){
    // console.log('onsubmit');
    // console.log(form);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const telepon = form.value.telepon;
    const nama = form.value.nama;
    this.contactService.addContact(form);
    this.router.navigateByUrl('/contacts')

    // console.log(email, telepon, nama);


  }

}
