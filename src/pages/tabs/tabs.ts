import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';
import { Tab6Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;  
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  tab6Root: any = Tab6Root;

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['Home', 'Social', 'Events', 'Albums', 'Search', 'Settings']).subscribe(values => {
      this.tab1Title = values['Home'];
      this.tab2Title = values['Social'];
      this.tab3Title = values['Events'];
      this.tab4Title = values['Albums'];
      this.tab5Title = values['Search'];
      this.tab6Title = values['Settings'];
    });
  }
}