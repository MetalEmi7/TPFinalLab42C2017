import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  mesaDisponible_Uno:string = "Disponible";
  mesaDisponible_Dos:string = "Disponible";
  mesaDisponible_Tres:string = "Disponible";


  evento:string = "Ningun evento";
  imp_evento:number = 0.00;

  invitados:string = "Cantidad de invitados: 0";
  imp_invitados:number = 0.00;
  
  mesas:string = "Cantidad de mesas: 0";
  imp_mesas:number = 0.00;

  comidaG:string = "Comida Gourmet";
  imp_comidaG:number = 0.00;

  comidaNoG:string = "Comida no Gourmet";
  imp_comidaNoG:number = 0.00;

  comidaSaludable:string = "Comida Saludable";
  imp_comidaSaludable:number = 0.00;

  totalAPAgar:number = 0.00;

  lat: number = -34.595863;
  lng: number = -58.391974;


 conEfectivo:Boolean=null;

  form={
    nombre:"string",
    apellido:"string",
    edad:"number",
    sexo:"string",
    
    password:"string",
    mail:"string",
  }


  locales: marker[] =
    [{
      nombre: "lugar 1",
      detalles: "Lugar para pasarla bien",
      lati:-34.595848,
      longi:-58.390422,
      arrastrable: false,
    },
    {
      nombre: "lugar 2",
      detalles: "Sin descripcion",
      lati:-34.596000,
      longi:-58.391000,
      arrastrable: false,
    },
    {
        nombre: "lugar 3",
        detalles: "....",
        lati:-34.595000,
        longi:-58.390000,
        arrastrable: false,
    }]


  constructor()
  { }








  tarjetaOEfectivo(radio)
  {
    if (radio.target.value == "true")
      this.conEfectivo = true;
    if (radio.target.value == "false")
      this.conEfectivo = false;;
  }

  tomarCoordenadas(datosTomados)
  {console.log(datosTomados);}


  ngOnInit()
  {
    this.totalAPAgar;
  }



}


interface marker{
  nombre?:string;
  detalles?:string;
  lati?:number;
  longi?:number;
  arrastrable?:boolean;
}