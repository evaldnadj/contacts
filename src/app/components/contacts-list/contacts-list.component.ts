import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contact = 'First Contact'; 
  contacts;
  searchTerm ='';

  constructor(private _contactsService: ContactsService) { 
    this.contacts = this._contactsService.getContacts();
      
      };

  removeContact(contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    //console.log(contact);
  }
    
  ngOnInit() {
  }

}
