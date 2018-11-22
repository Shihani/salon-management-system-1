import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from "./footer/footer.component";
import { CustomerComponent } from "./customer/customer.component";
import { StaffComponent } from "./staff/staff.component";
import { ManageCustomerComponent } from "./manage-customer/manage-customer.component";
import { ManageStaffComponent } from "./manage-staff/manage-staff.component";
import { ServiceComponent  } from "./service/service.component";
import { ManageServiceComponent } from "./manage-service/manage-service.component";
import { BookingComponent } from "./booking/booking.component";
import { ManageBookingComponent } from "./manage-booking/manage-booking.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'customerSignUp', component: CustomerComponent},
  { path: 'staffSignUp', component: StaffComponent},
  { path: 'customer', component: ManageCustomerComponent},
  { path: 'staff', component: ManageStaffComponent},
  { path: 'ServiceSignUp', component: ServiceComponent},
  { path: 'service', component: ManageServiceComponent},
  { path: 'bookingSignUp', component: BookingComponent},
  { path: 'booking', component: ManageBookingComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
