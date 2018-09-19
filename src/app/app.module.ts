import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParseService } from './parse.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepositRefundComponent } from './deposit-refund/deposit-refund.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'deposit-refunds', component: DepositRefundComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'contact', component: ContactComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepositRefundComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule
  ],
  providers: [
    ParseService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
