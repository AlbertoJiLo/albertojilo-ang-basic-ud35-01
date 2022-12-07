import { Component } from '@angular/core';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'albertojilo-ang-basic-ud35-01';

  nombre: string='';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';
  listaClientes:any =[];

  constructor(){

  }

  guardar(){
    let cliente = {nombre:this.nombre, cif:this.cif, direccion:this.direccion, grupo:this.grupo};
    this.listaClientes.push(cliente);
  }
}
