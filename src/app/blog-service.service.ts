import { Injectable } from '@angular/core';
import { BLOGS } from './mock/blog-mock'
import { Blog } from './model-classes/blog'

@Injectable()
export class BlogService {
  // currentActiveBlog: Blog[];
  constructor() { }
  
  // Return top 10 blogs
  getBlogs(): Promise<Blog[]>  {  
     return Promise.resolve(BLOGS);
  }

  getBlog(id: number): Blog {
    return BLOGS.filter(blog => blog.id === id)[0];
  }

}
