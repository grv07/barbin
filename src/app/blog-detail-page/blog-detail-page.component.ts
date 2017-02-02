import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog'
import { BlogService } from '../blog-service.service'
import { ShareddataService } from '../shareddata.service'
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

  constructor(private route: ActivatedRoute, private blogService: BlogService, 
    private dataService: ShareddataService) { }

  getCurrentBlog(id: number): void {
    this.currentBlog = this.blogService.getBlog(id);
  }

  onBlogLike(): void {
    this.currentBlog.totalLikes += 1;
    this.dataService.setUserLikeOnBlog(this.currentBlog.id);
    console.log(this.dataService.userLikes);
    this.isLiked = true;
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
  

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       
    });

    this.getCurrentBlog(this.id);
    this.isLiked = this.dataService.checkIfUserLikeOnBlog(this.currentBlog.id);
    console.log(this.isLiked);
  }

}
