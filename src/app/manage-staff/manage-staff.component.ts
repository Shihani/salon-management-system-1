import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  public staffTypeObj = {
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
    gender: '',
    joining_date: ''
  };
  allStaff = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllStaff().subscribe(
      res => {
        this.allStaff = res.data;
      }
    )
  }

  editStaff(staffObj) {
    this.staffTypeObj = staffObj;
  }

  deleteStaff(id) {
    this.adminService.deleteStaff(id).subscribe(res => {
      console.log(res);
    });
  }

  updateStaff() {
    this.adminService.updateStaff(this.staffTypeObj).subscribe(
      res => {
        console.log('Staff Updated: ' + res.data);
      }
    );
  }


}
