import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Folder } from 'src/app/models/folder.model';

import {DataService} from '../../services/data/data.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { Iicon } from 'src/app/models/list.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BreadcrumItem } from 'src/app/components/breadcrum/breadcrum-item';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  db = [];
  db_1 = [];
  db_2 = [];
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;


  contextMenuPosition = { x: '0px', y: '0px' };

  constructor(private dataService: DataService,    public overlay: Overlay,
    public auth:AuthService,
    public viewContainerRef: ViewContainerRef) { 
      this.db = this.dataService.getDataBase1();
    }

  ngOnInit(): void {
    this.db = this.dataService.getDataBase1();
    this.db_1 = this.dataService.getDataBase2();
    this.db_2 = this.dataService.getDataBase3();

    console.log("Loaded")
  }
  
  onContextMenu(event: MouseEvent, item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
  onContextMenuAction(item){
    console.log(item)
  }

  public dir:Array<BreadcrumItem> = [
    {id:"home", displayName:"Home",data:{}},
    {id:"demo01", displayName:"Demo 01"}
  ];
  public clickDir(item){
    console.log(item);
  }





}
