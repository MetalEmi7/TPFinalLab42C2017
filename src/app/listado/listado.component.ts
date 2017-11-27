import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  queEs:boolean=false;

  reservaciones:number = 0;

  sets = {
    columns: {
      cuit: {
        title: 'Cuit'
      },
      usuario: {
        title: 'Usuario'
      },
      email: {
        title: 'Email'
      },
      puntaje: {
        title: 'Pts'
      },
      fecha: {
        title: 'Fecha jugada'
      },
      sexo: {
        title: 'Genero'
      },
      gano: {
        title: 'Resultado'
      }
    }
  };
  
  constructor() { }




  listar()
  {

  }

  ngOnInit() {
  }

}
