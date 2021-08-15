import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.page.html',
  styleUrls: ['./info-tab.page.scss'],
})
export class InfoTabPage {

  version = environment.version;

}
