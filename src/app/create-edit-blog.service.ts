import { Injectable } from '@angular/core';
import { Blog } from './model-classes/blog'

@Injectable()
export class CreateEditBlogService {

  constructor() { }

  saveBlog(blogObject: Blog) : void {
    console.log(blogObject.content)
    console.log(typeof blogObject);
  }

  validateBlog(): Boolean {
    // Write some validation code ..
    return true;
  }

  editBlog(): void {
    // Edit here ..
  }

  deleteBlog(): Boolean {
    // Delete Blog Here
    return true;
  }

}
