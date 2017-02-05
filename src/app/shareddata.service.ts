import { Injectable } from '@angular/core';
import { Blog } from './model-classes/blog'
import { User } from './model-classes/user'
import { USERS } from './mock/user-mocks'


@Injectable()
export class ShareddataService {
  userLikes: Number[] = [];
  followList: Number[] = [];
  currentLoginUser: User; 

  constructor() {
    console.log('create new ...');
    this.setCurrentLoginUser()
  }

  // Current login user
  setCurrentLoginUser() : void {
    this.currentLoginUser = USERS[0];
  }

  getCurrentUser() : User {
    return this.currentLoginUser;
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
