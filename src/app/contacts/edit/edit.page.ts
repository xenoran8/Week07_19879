import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  form: FormGroup;
  loadedContact: Contact;

  constructor(
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contactId')) {
        return;
      }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContact(contactId);
    });

    this.form = new FormGroup({
      id: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      name: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      telepon: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      imageUrl: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  onSubmit(){
    // console.log(this.form.value)
    this.contactsService.editContact(this.form.value);
    this.router.navigate(['./contacts']);
  }

}
