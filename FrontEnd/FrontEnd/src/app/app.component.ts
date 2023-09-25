import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  modalSwitch: boolean = false;

  constructor(
    private modalSS: SwitchService
    ){}

  ngOnInit(): void {}

}
