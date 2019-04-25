import { Component, OnInit } from '@angular/core';

import { OrgNodeService } from '../../services/org-node.service';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  orgNodes: any[];

  constructor(private orgService: OrgNodeService) { }

  ngOnInit() {
    this.orgService.getOrgNodes()
      .subscribe(res => this.orgNodes = res.result)
  }

}
