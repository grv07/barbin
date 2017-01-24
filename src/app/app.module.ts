import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponentComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/blogs',
        pathMatch: 'full'
      },
      // {
      //   path: 'dashboard',
      //   component: AppComponent
      // },
      
      {
        path: 'dashboard',
        component: BlogComponentComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
