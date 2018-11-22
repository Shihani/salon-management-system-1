import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  allService = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllService().subscribe(
      res => {
        this.allService = res.data;
      }
    )
  }

}
