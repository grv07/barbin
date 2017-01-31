import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog'
import { BlogService } from '../blog-service.service'


@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css'],
  providers: [BlogService],
})
export class BlogDetailPageComponent implements OnInit {
  id: number;
  currentBlog: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  getCurrentBlog(id: number): void {
    this.currentBlog = this.blogService.getBlog(id);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

    });
    console.log(this.id);
    this.getCurrentBlog(this.id);
  }

}
