import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public ts:TestService){}
  
  addmobile(){
    this.ts.mobiles.push("vivo")
  }

}
