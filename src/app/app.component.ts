import { Component, OnInit } from '@angular/core';
import { ShareddataService } from './shareddata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ShareddataService] 
})
export class AppComponent{
  title = 'app works!';
  constructor(private dataShare: ShareddataService){}
}
