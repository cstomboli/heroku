import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  public edadDos:any;
  public edadUno:any;
  public numeroPromedio:number;
  public resultado:number;

  constructor() { }

  ngOnInit(): void {
  }

  ejemplo()
  {
    console.log(this.edadDos); 
    alert(this.edadDos);
  }

  public promedio():void
  {
    //isNaN
    if( !isNaN(this.edadUno) && !isNaN(this.edadDos))
    {
      this.resultado= parseInt(this.edadUno) + parseInt(this.edadDos);
      this.numeroPromedio=this.resultado/2;
      console.log(this.numeroPromedio, this.resultado);
    }
    else
    {
      console.log("ingreso letras");
    }
  }

  public limpiar()
  {
    this.edadDos = "";
    this.edadUno="";
  }

}
