import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { CopiasService } from '../services/copias.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  copiaSeguridadForm2: FormGroup;
  constructor(private formBuilder2: FormBuilder, private copiasSeguridadService: CopiasService, private router: Router) { }

  ngOnInit(): void {
    this.copiaSeguridadForm2 = this.formBuilder2.group({
      direccion: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/), Validators.required, Validators.nullValidator ]],
      estado: ['', [Validators.required, Validators.nullValidator]],
      usuario: ['', [Validators.required, Validators.nullValidator]],
      error: ['']
    });
  }

  get formControls(){
    return this.copiaSeguridadForm2.controls;
  }

  addresultado(): void{
    if(this.copiaSeguridadForm2.invalid){
      return;
    }
    const fecha = this.copiaSeguridadForm2.value.fecha;
    const direccion = this.copiaSeguridadForm2.value.direccion;
    const estado = this.copiaSeguridadForm2.value.estado;
    const usuario = this.copiaSeguridadForm2.value.usuario;
    const error = this.copiaSeguridadForm2.value.error;


    const copiaSeguridad = {'_id': '', 'fecha': fecha, 'direccion': direccion, 'estado': estado, 'usuario': usuario, 'error': error};
    // this.resultadoService.addResultado(resultadoclinico).subscribe(data =>{
    //   this.router.navigateByUrl('/principal');
    // })

    this.copiasSeguridadService.addCopia(copiaSeguridad).subscribe( async data =>{
      if(data.status == 200){
      console.log("200")

      }
      console.log( "data.statsu", data)
      await Swal.fire('Coleccion creada con éxito', '', 'success');
      this.router.navigateByUrl('/principal');
    }, err =>{
      console.log("error");
      if (err.status == 400) { console.log("404")}
      Swal.fire('Error al insertar un registro', '', 'error');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }





























}
