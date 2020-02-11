import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartViewComponent } from './views/start/start.component';

const routes: Routes = [
  { path: '', component: StartViewComponent },
  { path: 'lazy', loadChildren: './views/lazy-feature#LazyFeatureModule' },
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
