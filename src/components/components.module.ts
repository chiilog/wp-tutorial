import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { WpHeadComponent } from './wp-head/wp-head';

@NgModule({
	declarations: [WpHeadComponent],
	imports: [
    CommonModule,
    IonicModule
  ],
	exports: [WpHeadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
