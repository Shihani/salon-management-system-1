import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ServiceComponent } from './service/service.component';
import { BookingComponent } from './booking/booking.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    CustomerComponent,
    StaffComponent,
    ManageCustomerComponent,
    ManageStaffComponent,
    ManageServiceComponent,
    ServiceComponent,
    BookingComponent,
    ManageBookingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
