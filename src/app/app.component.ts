import { Component, OnInit } from '@angular/core';
import {Blog} from './blog'
import { BLOGS }from './mock/blog-mock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  blogs: Blog[];
  constructor() { }

  ngOnInit(): void{
    this.blogs = BLOGS
  }
  
}
