import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { AddpromoComponent } from './addpromo/addpromo.component';
import { ViewpromoComponent } from './viewpromo/viewpromo.component';
import { UpdatepromoComponent } from './updatepromo/updatepromo.component';
const appRoute:Routes=[
  { path: '', component: LoginComponent},
  { path: 'index', component:IndexComponent },
  { path: 'addcategory', component:AddcategoryComponent},
  { path: 'addproduct', component:AddproductComponent},
  { path: 'viewproduct', component:ViewproductComponent},
  { path: 'viewcategory', component:ViewcategoryComponent},
  {path: 'updateproduct/:id',component:UpdateproductComponent},
  {path:'updatecategory/:id',component:UpdatecategoryComponent},
  {path:'addpromo',component:AddpromoComponent},
  {path:'viewpromo',component:ViewpromoComponent},
  {path:'updatepromo/:id',component:UpdatepromoComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TopbarComponent,
    SidebarComponent,
    AddproductComponent,
    AddcategoryComponent,
    ViewproductComponent,
    ViewcategoryComponent,
    UpdateproductComponent,
    UpdatecategoryComponent,
    AddpromoComponent,
    ViewpromoComponent,
    UpdatepromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
