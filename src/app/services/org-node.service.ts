import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrgNodeService {

  constructor(private http: HttpClient) { }

  getOrgNodes(): Observable<any> {
    let query = '/api/now/table/x_0290_org_chart_org?sysparm_query=level%3D1%5EORlevel%3D2%5EORDERBYlevel%5EORDERBYcode';
    query += '&sysparm_display_value=true'

    return this.http.get<any[]>(query)

  }

}
