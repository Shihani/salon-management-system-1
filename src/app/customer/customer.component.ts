import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customerTypeObj = {
    name: '',
    email: '',
    contact: '',
    house_no: '',
    landmark: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    gender: ''
  };

  constructor(public adminService: AdminService) {}

  ngOnInit() {}

  submit() {
    this.adminService.addcustomer(this.customerTypeObj).subscribe(res => {
      console.log(res);
    });
  }

}
