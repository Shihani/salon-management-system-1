import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginTypeObj = {
    email: '',
    password: ''
  };

  constructor(public adminService: AdminService) {}

  ngOnInit() {}

  submit() {
    this.adminService.addServiceType(this.loginTypeObj).subscribe(res => {
      console.log(res);
    });
  }
}
