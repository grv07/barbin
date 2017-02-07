import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../model-classes/blog'
import { User } from '../model-classes/user'
import { BlogService } from '../blog-service.service'
import { ShareddataService } from '../shareddata.service'
import { Router } from '@angular/router';


// import { ContentFormatPipe } from '../content-format.pipe'

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css'],
  providers: [BlogService],
})
export class BlogDetailPageComponent implements OnInit {
  id: number;
  currentBlog: Blog;
  isLiked: Boolean = false;
  isFollowed: Boolean = false;
  currentLoginUser: User;

  constructor(private route: ActivatedRoute, private blogService: BlogService, 
    private dataService: ShareddataService, private router: Router) { }

  getCurrentUser(): void {
    this.currentLoginUser =  this.dataService.getCurrentUser();
  }

  getCurrentBlog(id: number): void {
    this.currentBlog = this.blogService.getBlog(id);
  }

  onBlogLike(): void {
    this.currentBlog.totalLikes += 1;
    this.dataService.setUserLikeOnBlog(this.currentBlog.id);
    console.log(this.dataService.userLikes);
    this.isLiked = true;
  }

  blogEditAction(blogId: number): void {
    console.log('go for edit ...');
    this.router.navigate(['/edit', blogId]);
  }

  onAuthorFollow(status: boolean): void {
    // If: follow is not check then add ;
    if (status === false){
      this.dataService.setUserFollow(this.currentBlog.author.id);
      console.log(this.dataService.followList);
      this.isFollowed = true;
    }
    // else: remove; set it false
    else{
      this.onAuthorUnFollow();
    }
  }

  onAuthorUnFollow(): void {
    this.dataService.unfollowAuthor(this.currentBlog.author.id);
    console.log(this.dataService.followList);
    this.isFollowed = false;
  }

  downloadPdf(blog: Blog): void {
    this.dataService.downloadAsPdf(blog);
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.getCurrentBlog(this.id);
    this.isLiked = this.dataService.checkIfUserLikeOnBlog(this.currentBlog.id);
    console.log(this.isLiked);
    this.getCurrentUser()
  }

}
