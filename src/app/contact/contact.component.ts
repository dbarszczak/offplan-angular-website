import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(private parseService: ParseService, private router: Router) {}

  ngOnInit() {}

  submitButton() {
    console.log("submitButton clicked");
    let form = this.parseService.newForm();
    form.set("contactName",   this.contactName);
    form.set("contactEmail",  this.contactEmail);
    form.set("contactNumber", this.contactNumber);
    if ( this.validateForm() ) {
      this.saveForm(form);
    } else {
      alert("Please fill out all fields.");
    }
  }

  saveForm(form): Promise<any> {
    return this.parseService.saveForm(form).then(
      (result) => {
        console.log("Form was sent successfully");
        this.clearForm();
        this.router.navigateByUrl("/confirm");
      }, (error) => {
        alert("An unknown error occoured!");
        console.log("Error: " + error);
      }
    );
  }

  validateForm(): Boolean {
    if ( this.contactName == undefined ) {
      return false;
    }

    if ( this.contactEmail == undefined ) {
      return false;
    }

    if ( this.contactNumber == undefined ) {
      return false;
    }
    
    return true;
  }

  clearForm() {
    this.contactName = undefined;
    this.contactNumber = undefined;
    this.contactEmail = undefined;
  }

}
