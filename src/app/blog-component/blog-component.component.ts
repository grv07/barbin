import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Blog } from '../blog'
import { BlogService } from '../blog-service.service'
import { BLOGS }from '../mock/blog-mock'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css'],
  providers: [BlogService],
})
export class BlogComponentComponent implements OnInit {
  blogs: Blog[];
  selectedBlog: Blog;

  constructor( private blogService: BlogService ) { }

  getBlogs(): void {
    this.blogService.getBlogs().then(blogs => this.blogs = blogs);
  }

  ngOnInit(): void{
    this.getBlogs();
  }

  onSelect(blog: Blog): void{
    // console.log('Under select action .. :)')
    this.selectedBlog = blog;
    // console.log(this.selectedBlog);
  }

}
