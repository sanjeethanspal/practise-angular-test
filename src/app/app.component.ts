import {Component} from '@angular/core';
import { ToggleService } from './toggle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ui-angular-test';

  constructor(
    private toggleService: ToggleService
  ){

  }
  
  toggle(){
    this.toggleService.toggle()
  }
  
}
