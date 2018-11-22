import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.css"]
})
export class ServiceComponent implements OnInit {
  public serviceTypeObj = {
    name: ""
  };

  public service2TypeObj = {
    name: '',
    typeid:'',
    price: '',
    typedescription:''
  };

  allServiceType = [];

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllServiceType().subscribe(
      res => {
        this.allServiceType = res.data;
      }
    )
  }

  submit() {
    this.adminService.addServiceType(this.serviceTypeObj).subscribe(res => {
      console.log(res);
    });
  }

  submit2() {
    this.adminService.addservice(this.service2TypeObj).subscribe(res => {
      console.log(res);
    });
  }
}
