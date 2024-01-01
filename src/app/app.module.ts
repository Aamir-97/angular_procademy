import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterComponent } from './filter/filter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { SampleCustomDirective } from './custom-directive/sample-custom.directive';
import { HoverDirective } from './custom-directive/hover.directive';
import { IfDirective } from './custom-directive/if.directive';
import { AddoreditCustomerComponent } from './addoredit-customer/addoredit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
// import { Counter, UpgradesComponent } from './upgrades/upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    CustomerListComponent,
    FilterComponent,
    ContactUsComponent,
    HomeComponent,
    ContentComponent,
    SampleCustomDirective,
    HoverDirective,
    IfDirective,
    AddoreditCustomerComponent,
    CustomerDetailsComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    BuyNowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
