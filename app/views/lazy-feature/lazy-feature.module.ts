import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from '../../shared-components';

import { LazyViewComponent } from './lazy-view/lazy-view.component';

const routes = [
  {path: '', component: LazyViewComponent }
];

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes),

    SharedComponentsModule,
  ],
  declarations: [
    LazyViewComponent
  ]
})
export class LazyFeatureModule { }