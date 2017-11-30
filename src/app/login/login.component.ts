import { Component, OnInit } from '@angular/core';
import { MiHttpService } from "../servicios/mi-http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form = 
{
  mail:"",
  password:"",
}



formAlta = {
  id: "",
  nombre:"string",
  apellido:"string",
  edad:"number",
  sexo:"string",
  mail:"string",
  password:"string",
  fecha_registro:"string",
}

  constructor(private miHttp:MiHttpService)
  { }

  loguearse(usuarioParaLoguear)
  { 
    this.miHttp.traerUsuarioLogueado(usuarioParaLoguear)
    .then(data=>{

      if (data == null)
      {
        alert();
        
      }
      else
      console.log(data);

    })
  }




  ngOnInit()
  {
    this.miHttp.altaUsuario(this.formAlta)
    .then(data=>{

      if (data == null)
      {
        alert();
        
      }
      else
      console.log(data);

    })

  }

}
