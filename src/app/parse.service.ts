import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import 'rxjs/add/operator/map';

@Injectable()

export class ParseService {
  private parseAppId: String = "75ffb5738ff65d5cfb6efbdd1293e484d99e2693";
  private parseServerUrl: string = "https://parse.danimos-pizza-takeaway.davidbarszczak.com/parse";

  constructor() {
    this.parseInitialize();
    console.log("Parse Initialized");
  }

  parseInitialize() {
    Parse.serverURL = this.parseServerUrl;
    Parse.initialize(this.parseAppId);
  }

  /* Application Helpers */
  listCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const Category = Parse.Object.extend("Category");
        let query = new Parse.Query(Category);
        query.find().then(function(categories) {
          resolve(categories);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

}
