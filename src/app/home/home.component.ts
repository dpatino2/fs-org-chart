import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'zlib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // users: any;
  orgNodes: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    // make an api call. Treat the "HttpClient" service just as you would the standard Http service.
    let query = '/api/now/table/x_0290_org_chart_org?sysparm_query=level%3D1%5EORlevel%3D2%5EORDERBYlevel%5EORDERBYcode';
    query += '&sysparm_display_value=true'

    this.http.get<any>(query).subscribe( res => {

      this.orgNodes = res.result;

      /*
      // let's take the response, parse the dates and store it in a users array
      this.users = res.result.map( user => {
        user.sys_created_on = new Date(user.sys_created_on);
        return user;

      // a quick and dirty sort...
      }).sort( (a,b) => `${a.first_name}${a.last_name}` < `${b.first_name}${b.last_name}` ? - 1 : 1);
      */
    });
  }

}
