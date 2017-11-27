import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  form={
    nombre:"string",
    apellido:"string",
    edad:"number",
    sexo:"string",
    
    password:"string",
    mail:"string",
  }

  constructor() { }

  ngOnInit() {
  }

}
