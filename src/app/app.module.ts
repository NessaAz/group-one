import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { FormComponent } from './component/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
