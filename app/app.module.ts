import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { SharedComponentsModule } from './shared-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartViewComponent } from './views/start/start.component';

@NgModule({
  imports:[
    BrowserModule,

    AppRoutingModule,

    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    SharedComponentsModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    StartViewComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.log('constructor AppModule');
  }
}
