import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    MapComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VMO { }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    VMO
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
