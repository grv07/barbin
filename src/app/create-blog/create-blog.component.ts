import { Component, OnInit } from '@angular/core';
// import { QuillModule } from 'ngx-quill'

// import * as Quill from 'quill';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent{

  public editorContent = `<p>My HTML</p>`;
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };

  constructor() {}
  
  onEditorCreated(quill) {
    // console.log('this is quill object', quill);
  }
  
  onContentChanged({ quill, html, text }) {
    console.log(text, this.editorContent.indexOf('img'));
  }

}
