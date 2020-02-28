import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Reparacion } from '../reparacion';

@Component({
  selector: 'app-nueva-reparacion',
  templateUrl: './nueva-reparacion.component.html',
  styleUrls: ['./nueva-reparacion.component.scss']
})
export class NuevaReparacionComponent implements OnInit {

  nuevaReparacion: FormGroup;

  @Output() crearNuevaReparacionEvent = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.nuevaReparacion = this._formBuilder.group({
      dispositivo: ['', [Validators.required]],
      servicio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

  }

  generar(){
    if(this.nuevaReparacion.invalid)
      return alert('Formulario invalido');

    let datos = this.nuevaReparacion.value;
    let reparacion:Reparacion = new Reparacion(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100000), new Date(Date.now()), new Date(Date.now()), datos.dispositivo, datos.servicio, datos.descripcion)

    console.log(reparacion);
    this.crearNuevaReparacionEvent.emit(reparacion)
  }

}
