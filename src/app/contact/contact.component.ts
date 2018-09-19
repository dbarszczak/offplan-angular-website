import { Component, OnInit } from '@angular/core';
import { ParseService } from '../parse.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactName: any;
  contactEmail: any;
  contactNumber: any;

  constructor(private parseService: ParseService) {}

  ngOnInit() {}

  submitButton() {
    console.log("submitButton clicked");
    let form = this.parseService.newForm();
    form.set("contactName",   this.contactName);
    form.set("contactEmail",  this.contactEmail);
    form.set("contactNumber", this.contactNumber);
    this.saveForm(form);
  }

  saveForm(form): Promise<any> {
    return this.parseService.saveForm(form).then(
      (result) => {
        console.log("Form was sent successfully");
      }, (error) => {
        console.log("Error: " + error);
      }
    );
  }

}
