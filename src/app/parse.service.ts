import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import 'rxjs/add/operator/map';

@Injectable()

export class ParseService {
  private parseAppId: String = "4PMEV5S4M2XDFHQO2GIIKVKD7J3JJE8DNEZDOOHQ9QALMIRXZ7PXRR7J2G8B67UTYXD3EFZWZFII81FX53WKTWNQY7IHHYNQ4FB";
  private parseServerUrl: string = "https://jdstudios-forms.davidbarszczak.com/parse";

  constructor() {
    this.parseInitialize();
    console.log("Parse Initialized");
  }

  parseInitialize() {
    Parse.serverURL = this.parseServerUrl;
    Parse.initialize(this.parseAppId);
  }

  /* Application Helpers */
  newForm() {
    const Form = Parse.Object.extend("OffPlan");
    const form = new Form();
    return form;
  }

  saveForm(form): Promise<any> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        form.save().then(function(form) {
          resolve(form);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

}
