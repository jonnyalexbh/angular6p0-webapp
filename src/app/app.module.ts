import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductsListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
