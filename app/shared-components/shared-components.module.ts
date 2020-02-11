import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TagsState } from './tags.state';
import { TagsComponent } from './tags/tags.component';

const sharedComponents = [
  TagsComponent,
];

//
// Error
// if we include NgxsModule.forFeature
// angular will instantiate a new state each @NgModule you import it in.
// we need to move forFeature into a forRoot() call
//
/*@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TagsState])
  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    ...sharedComponents,
  ]
})
export class SharedComponentsModule {
  constructor() {
    console.log('constructor SharedComponentsModule');
  }
}*/

/*
 * The Hidden Root Module Strategy™
 * We declare the SharedComponentsModule as usual, but in the forRoot() method, we use a module that will be the SharedComponentsModule's singleton module.
 * It will only get instantiated once, and used by the forRoot caller.
 * 
 * Then in the lazy view we import SharedComponentsModule as usual, and that means that we don't instatitate TagsState twice.
 * 
 * It's a rather clean workaround for ModuleWithProviders not supporting "imports".
 */

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    CommonModule,
    ...sharedComponents,
  ]
})
export class SharedComponentsModule {

  constructor() {
    console.log('constructor SharedComponentsModule');
  }
  
  static forRoot(): ModuleWithProviders {
    console.log('SharedComponentsModule.forRoot');
    return {
      ngModule: RootSharedComponentsModule
    };
  }
}

/**
 * Special module that is only used when calling forRoot()
 */
@NgModule({
  imports: [
    NgxsModule.forFeature([TagsState]),

    // import so that the module calling forRoot() gets hold of all the stuff too.
    SharedComponentsModule,
  ],
  exports: [
    SharedComponentsModule,
  ]
})
export class RootSharedComponentsModule {
  constructor() {
    console.log('constructor RootSharedComponentsModule');
  }
}
