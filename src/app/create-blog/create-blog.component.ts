import { Component, OnInit } from '@angular/core';
// import { QuillModule } from 'ngx-quill'

// import * as Quill from 'quill';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent{

  public editorContent = `
     <blockquote>Q. How to style my text ?</blockquote><blockquote>A. <strong>Select Tex</strong>t and <u>click</u> on <span style="color: rgb(230, 0, 0);">function</span> <em>buttons</em> on <span style="background-color: rgb(255, 153, 0);">header</span>.</blockquote><p>* Color text style not working ( We are working on this editor to improve stuff on this.)</p><blockquote>Q. Why style stick on my cursor ?</blockquote><blockquote>A. Please click again on function button related to the style you want to remove.</blockquote><p></p><blockquote>Q. How to write code ?</blockquote><blockquote>A. Write select and click on button on menu.</blockquote>
  `;
  public editorConfig = {
    placeholder: "Type something ..."
  };

  constructor() {}
  
  onEditorCreated(quill) {
    console.log('this is quill object', quill);
  }
  
  onContentChanged({ quill, html, text }) {
    console.log(text, html);
  }

}
