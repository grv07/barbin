import { Injectable } from '@angular/core';
import { Blog } from './blog'

@Injectable()
export class ShareddataService {
  userLikes: Number[] = [];
  followList: Number[] = [];

  constructor() { 
    console.log('create new ...');
  }
  
  // ----------- User Like set/get ---------------

  setUserLikeOnBlog(blogId: Number): void {
   if (this.userLikes.indexOf(blogId) === -1){
     this.userLikes.push(blogId);
   }
   else{
     console.log('already like ..')
   }
    
  }

  getUsersLikesOnBlogs(): void {} // ToDo
  
  checkIfUserLikeOnBlog(blogId: Number): Boolean {
    return (this.userLikes.indexOf(blogId) === -1)?false:true
  }

  unlikeBlog(): void {} // TODO

  // ----------- User Follow set/get --------------

  setUserFollow(authorId: Number): void {
    if (this.followList.indexOf(authorId) === -1){
      this.followList.push(authorId);
    }
    else{
      console.log('already follow ..')
    }
    
  }

  unfollowAuthor(authorId: Number): void{
    var index = this.followList.indexOf(authorId, 0);
    if (index > -1) {
      this.followList.splice(index, 1);
    }
  }

  getUserFollowList(): void {} // ToDo
  
  checkIfUserFollow(userId: Number): Boolean {
    return (this.followList.indexOf(userId) === -1)?false:true
  }
  // End od Follow set/get

}
