import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryService } from './category/category.service';
import { DeviceService } from './device/device.service';
import { DeviceComponent } from './device/device.component';
import { DeviceCreateComponent } from './device-create/device-create.component';  

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CategoryComponent,
    CategoryCreateComponent,
    DeviceComponent,
    DeviceCreateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'category', component: CategoryComponent },
      { path: 'category-create', component: CategoryCreateComponent },
      { path: 'device', component: DeviceComponent },
      { path: 'device-create', component: DeviceCreateComponent },
    ])
  ],
  providers: [CategoryService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
