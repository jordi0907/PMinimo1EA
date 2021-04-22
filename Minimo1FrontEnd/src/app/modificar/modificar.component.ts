import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { copiaSeguridad } from '../model/copia';
import { CopiasService } from '../services/copias.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {


  copiaSeguridadForm: FormGroup;
  resultado: copiaSeguridad;
  id: String;

  constructor(private formBuilder: FormBuilder, private copiasSeguridadService: CopiasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.copiasSeguridadService.getCopia(this.id).subscribe(data =>{
      this.resultado = data;
      this.copiaSeguridadForm = this.formBuilder.group({
        direccion: [this.resultado.direccion, [Validators.required, Validators.nullValidator]],
        estado: [this.resultado.estado, [Validators.required, Validators.nullValidator]],
        fecha: [this.resultado.fecha, [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),Validators.required, Validators.nullValidator]],
        usuario: [this.resultado.usuario, [Validators.required, Validators.nullValidator]],
        error: [this.resultado.error]
      });
    })
  }

  get formControls(){
    return this.copiaSeguridadForm.controls;
  }


  atras(){
    this.router.navigateByUrl('/principal');
  }


  modificarResultado(){
    if(this.copiaSeguridadForm.invalid){
      return;
    }

    const direccion = this.copiaSeguridadForm.value.direccion;
    const estado = this.copiaSeguridadForm.value.estado;
    const fecha = this.copiaSeguridadForm.value.fecha;
    const error = this.copiaSeguridadForm.value.error;
    const usuario = this.copiaSeguridadForm.value.usuario;


    const resultadomodificado = {'_id': '', 'fecha': fecha, 'direccion': direccion, 'estado': estado, 'usuario': usuario, 'error': error};
    this.copiasSeguridadService.modificarCopia(resultadomodificado, this.route.snapshot.paramMap.get('id')).subscribe(async data => {
      await Swal.fire('Coleccion modificada con éxito', '', 'success');
      this.router.navigateByUrl('/principal');
    },err =>{
      console.log("error");
      Swal.fire('Error en la conexion', '', 'error');
    })
  }


















}
