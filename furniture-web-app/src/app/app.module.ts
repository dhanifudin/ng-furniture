import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemListComponent } from './collection/item-list/item-list.component';
import { ItemDetailComponent } from './collection/item-detail/item-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShortenPipe } from './shared/pipe/shorten.pipe';
import { AppRoutingModule } from './/app-routing.module';

import { CategoryService } from './shared/service/category.service';
import { FurnitureService } from './shared/service/furniture.service';
import { SanitizeUrlPipe } from './sanitize-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ShortenPipe,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    FurnitureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
