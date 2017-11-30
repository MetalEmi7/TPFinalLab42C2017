import { Injectable } from '@angular/core';

import { Response, Http, ResponseOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {

  constructor(private http: Http) { }

  public traerTodosLosUsuario(usuario)  {
    let url = "http://localhost/slim_fiestas/apirest/usuarios/";

    return this.http
    .get(url, usuario)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

  public altaUsuario(usuario)  {
    let url = "http://localhost/slim_fiestas/apirest/usuarios/insert";

    return this.http
    .post(url, usuario)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }

  public traerUsuarioLogueado(usuario)  {
    let url = "http://localhost/slim_fiestas/apirest/login/signin";

    return this.http
    .post(url, usuario)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }


  private extraerDatos(resp:Response)
  {return resp.json() || {}}

  private handlerError(error:Response | any)
  {return error;}
}
