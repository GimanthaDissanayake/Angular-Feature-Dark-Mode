import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModule } from "./mat.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingChangeColorSchemeComponent } from "./components/settings/setting-change-color-scheme/setting-change-color-scheme.component";
import { FormsModule } from '@angular/forms';

// IMPORT MatModule AND SettingChangeColorSchemeComponent WHICH WE CREATED


@NgModule({
  declarations: [
    AppComponent,SettingChangeColorSchemeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
