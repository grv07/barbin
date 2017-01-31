import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponentComponent,
    BlogDetailPageComponent
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
      {
        path: 'blog/:id',
        component: BlogDetailPageComponent
      },
      
      {
        path: 'blogs',
        component: BlogComponentComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
