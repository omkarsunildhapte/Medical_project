import { Component, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  

  constructor(){
  }

  
  }


  


