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
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';



import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './service/contactus/contactus.component';
import { CustomerserviceComponent } from './service/customerservice/customerservice.component';
import { AboutusComponent, AddaboutusComponent, UpdateaboutusComponent } from './service/aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
const appRoute:Routes=[
  { path: '', component: LoginComponent},
  { path: 'index', component:IndexComponent,canActivate: [AuthGuard]},
  { path: 'addcategory', component:AddcategoryComponent, canActivate:[AuthGuard]},
  { path: 'addproduct', component:AddproductComponent,canActivate:[AuthGuard]},
  { path: 'viewproduct', component:ViewproductComponent,canActivate:[AuthGuard]},
  { path: 'viewcategory', component:ViewcategoryComponent ,canActivate:[AuthGuard]},
  {path: 'updateproduct/:id',component:UpdateproductComponent, canActivate:[AuthGuard]},
  {path:'updatecategory/:id',component:UpdatecategoryComponent,canActivate:[AuthGuard]},
  {path:'addpromo',component:AddpromoComponent , canActivate:[AuthGuard]},
  {path:'viewpromo',component:ViewpromoComponent,canActivate:[AuthGuard]},
  {path:'updatepromo/:id',component:UpdatepromoComponent, canActivate:[AuthGuard]},
  
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard]},
  {path:'addaboutus',component:AddaboutusComponent,canActivate:[AuthGuard]},
  {path:'updateaboutus/:id',component:UpdateaboutusComponent,canActivate:[AuthGuard]},
  {path:'order',component:OrderComponent,canActivate:[AuthGuard]},
  {path:'customerservice',component:CustomerserviceComponent,canActivate:[AuthGuard]}

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
    UpdatepromoComponent,
    AboutusComponent,
    ServiceComponent,
    ContactusComponent,
    CustomerserviceComponent,
    AddaboutusComponent,
    UpdateaboutusComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
