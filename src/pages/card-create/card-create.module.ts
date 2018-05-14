import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CardCreatePage } from './card-create';

@NgModule({
  declarations: [
    CardCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CardCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    CardCreatePage
  ]
})
export class CardCreatePageModule { }
