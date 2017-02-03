declare var quill: any;
declare var $:any;

import { Component, OnInit } from '@angular/core';
import { QuillModule } from 'ngx-quill'

import * as Quill from 'quill';

// import '/home/kale/barbin/node_modules/quill/quill.js'


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  quillEditor: any;
  constructor() { 
    
  }

  ngOnInit() {
    this.quillEditor.getText();
  }
  
  onModelTouched(): void {
    console.log('call');
    // $('s').val();
    // quill.blur();
  }

  // onContentChanged(): void {
  //   console.log('onContentChanged')
  // }

}
