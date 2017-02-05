import { Component, OnInit } from '@angular/core';
import { editorFAQ } from '../mock/style-faq'
declare var $: any
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent{
  
  public editorContent = editorFAQ;
  
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
