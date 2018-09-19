import { Component } from '@angular/core';
import { ParseService } from './parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  categories = [];

  constructor(private parseService: ParseService) {
    this.listCategories();
  }

  listCategories(): Promise<any> {
    return this.parseService.listCategories().then(
      (result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
