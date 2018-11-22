import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public _http:Http) { }

  addServiceType(serviceTypeObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = serviceTypeObj;
    return this._http
      .post(environment.apiURL + 'addservicetype', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  addcustomer(customerTypeObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = customerTypeObj;
    return this._http
      .post(environment.apiURL + 'addcustomer', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  addstaff(staffTypeObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = staffTypeObj;
    return this._http
      .post(environment.apiURL + 'addstaff', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  addservice(staffTypeObj) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    const data: object = staffTypeObj;
    return this._http
      .post(environment.apiURL + 'addservice', data, options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllServiceType() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'servicetype', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllCustomer() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'customer', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllService() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'service', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  getAllStaff() {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(environment.apiURL + 'staff', options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  deleteCustomer(id) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .delete(environment.apiURL + 'deletecustomer/'+ id , options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

  deleteStaff(id) {
    const headers = new Headers({
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Access-Control-Allow-Origin': '*'
      'Content-Type': 'application/json;charset=ISO-8859-1'
    });

    const options = new RequestOptions({ headers: headers });
    return this._http
      .delete(environment.apiURL + 'deletestaff?id='+ id , options)
      .pipe(
        map(res => {
          return { status: res.status, data: res.json() };
        })
      );
  }

}
