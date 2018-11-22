import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  public staffTypeObj = {
    name: '',
    email: '',
    contact: '',
    house_no: '',
    landmark: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    gender: '',
    joining_date: ''
  };

  constructor(public adminService: AdminService) {}

  ngOnInit() {
  }

  submit() {
    this.adminService.addstaff(this.staffTypeObj).subscribe(res => {
      console.log(res);
    });
  }

}
