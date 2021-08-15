import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Parent page for tab 'Info'
 */
@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.page.html',
  styleUrls: ['./info-tab.page.scss'],
})
export class InfoTabPage {

  /**
   * Version for use in template
   */
  version = environment.version;

}
