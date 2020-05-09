import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WrongComponent } from './wrong/wrong.component';
import { PromptComponent } from './prompt/prompt.component';
import { RestartComponent } from './restart/restart.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WrongComponent,
    PromptComponent,
    RestartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
