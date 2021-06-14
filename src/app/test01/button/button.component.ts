import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  text: any
  constructor() { }

  ngOnInit() {
  }

}
