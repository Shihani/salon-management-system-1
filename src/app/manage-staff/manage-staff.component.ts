import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  allStaff = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllStaff().subscribe(
      res => {
        this.allStaff = res.data;
      }
    )
  }

}
