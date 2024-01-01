import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { BuynowRoutegaurdService } from './Services/buynow-routegaurd.service';

const routes: Routes = [
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'about', component: CustomerListComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products', children: [
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'product-buy/:id', component: BuyNowComponent, canActivate: [BuynowRoutegaurdService] },
  ]},
  { path: 'profile', component: ProfileComponent },

  // { path: 'products/product-details/:id', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
