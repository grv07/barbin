import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog-service.service'
import { CreateEditBlogService } from '../create-edit-blog.service'

import { Blog } from '../model-classes/blog'
declare var $: any

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService, CreateEditBlogService]
})
export class EditBlogComponent implements OnInit {
  blogId: number;
  public blogData: Blog;
  public editorConfig = {
    placeholder: "Type something ..."
  };

  constructor(private route: ActivatedRoute, private blogService: BlogService, 
              private editBlogService: CreateEditBlogService) {
    this.blogData = this.blogService.getBlog(this.blogId);
     console.log(this.blogData);
  }

  onEditorCreated(quill) {
    console.log('this is quill object', quill);
    $('.modal').modal();
  }
  
  onContentChanged({ quill, html, text }) {
    console.log(this.blogData.content);
  }

  blogSaveAction(): Boolean {
    this.editBlogService.saveBlog(this.blogData);
    return true
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
     this.blogId = +params['id']; // (+) converts string 'id' to a number
     console.log(this.blogId);
     this.blogData = this.blogService.getBlog(this.blogId);
    });
  }

}
