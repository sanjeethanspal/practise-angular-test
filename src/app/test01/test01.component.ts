import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service'
import { ToggleService } from '../toggle.service'

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

  buttonData: Observable<any>

  constructor(
    private dataService: DataService,
    private toggleService: ToggleService
    ) {
      //Default load one language data
      this.buttonData =  this.dataService.getDataLanguage2()
  }

  ngOnInit() {

    //Receiving the data from the data service as Observable
    this.toggleService.status().subscribe((status) => {
      if(status){
        this.buttonData =  this.dataService.getDataLanguage2()
      }else{
        this.buttonData =  this.dataService.getDataLanguage1()
      }
    })
   
  }
}
