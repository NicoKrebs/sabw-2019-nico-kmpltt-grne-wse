import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  constructor() { }
  Eingabefeld : number= 5 
  ergebnis= "drücke auf los"

  ngOnInit() {
  }

}