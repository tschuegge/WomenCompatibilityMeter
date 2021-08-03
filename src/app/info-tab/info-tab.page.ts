import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.page.html',
  styleUrls: ['./info-tab.page.scss'],
})
export class InfoTabPage implements OnInit {

  version = environment.version;

  constructor() { }

  ngOnInit() {
  }

}
