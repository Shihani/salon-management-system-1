import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  public customerTypeObj = {
    id: '',
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
  allCustomer = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllCustomer().subscribe(
      res => {
        this.allCustomer = res.data;
      }
    )
  }

  editCustomer(customerObj) {
    this.customerTypeObj = customerObj;
  }

  deleteCustomer(id) {
    this.adminService.deleteCustomer(id).subscribe(res => {
      console.log(res);
    });
  }

  updatecustomer() {
    this.adminService.updatecustomer(this.customerTypeObj).subscribe(
      res => {
        console.log('Staff Updated: ' + res.data);
      }
    );
  }

}
