import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AdminComponentsModule, } from './components/admin/admin-components.module';
import { SiteComponentsModule } from './components/site/site-components.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    AdminComponentsModule,
    SiteComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
