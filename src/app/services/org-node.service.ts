import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrgNodeService {

  constructor(private http: HttpClient) { }

  getOrgNodeData(): Observable<any> {
    let query = '/api/now/table/x_0290_org_chart_org?sysparm_query=level%3D1%5EORlevel%3D2%5EORDERBYlevel%5EORDERBYcode';
    query += '&sysparm_display_value=true'

    return this.http.get<any[]>(query)

  }

  getOrgNodes(): any[] {
    return [
      { key: 1, text: 'Alpha', color: 'lightblue' },
      { key: 2, text: 'Beta', color: 'orange' },
      { key: 3, text: 'Gamma', color: 'lightgreen' },
      { key: 4, text: 'Delta', color: 'pink' }
    ];
  }

  getOrgLinks(): any[] {
    return [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 2 },
      { from: 3, to: 4 },
      { from: 4, to: 1 }
    ]
  }

}
