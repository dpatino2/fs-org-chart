import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as go from 'gojs';

import { OrgNodeService } from '../../services/org-node.service';

@Component({
  selector: 'app-org-diagram',
  templateUrl: './org-diagram.component.html',
  styleUrls: ['./org-diagram.component.css']
})
export class OrgDiagramComponent implements OnInit {

  private diagram: go.Diagram = new go.Diagram();
  // private palette: go.Palette = new go.Palette();

  @ViewChild('diagramDiv')
  private diagramRef: ElementRef;

  constructor(private orgService: OrgNodeService) {
    const $ = go.GraphObject.make;
    // Place GoJS license key here:
    // (go as any).licenseKey = "..."
    this.diagram = new go.Diagram();

    const model = new go.GraphLinksModel(orgService.getOrgNodes(), orgService.getOrgLinks())

    this.diagram.model = model;

  }

  ngOnInit() {
    this.diagram.div = this.diagramRef.nativeElement;
    // this.palette.div = this.paletteRef.nativeElement;
  }

}
