import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  allCustomer = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllCustomer().subscribe(
      res => {
        this.allCustomer = res.data;
      }
    )
  }

  deleteCustomer(id) {
    this.adminService.deleteCustomer(id).subscribe(res => {
      console.log(res);
    });
  }

}
