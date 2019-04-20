import { Component, OnInit } from '@angular/core';

import { OrgNodeService } from '../services/org-node.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // users: any;
  orgNodes: any[];

  constructor(
    // private http: HttpClient,
    private orgService: OrgNodeService) { }

  ngOnInit() {

    this.orgService.getOrgNodes()
      .subscribe(res => this.orgNodes = res.result)
  }

}
