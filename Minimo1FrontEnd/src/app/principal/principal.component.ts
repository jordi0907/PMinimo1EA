import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { copiaSeguridad } from '../model/copia';
import { CopiasService } from '../services/copias.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  copias: copiaSeguridad[];
  constructor(private copiasSeguridadService: CopiasService, private router: Router ) { }

  ngOnInit(): void {
    this.copiasSeguridadService.getCopias().subscribe( res =>{
      this.copias = res;
      console.log(this.copias);
    },err =>{
      console.log("error");
      Swal.fire('Error en la conexion', '', 'error');
    })
  }

  modificar(copiaId){
    this.router.navigate(['/' + copiaId]);
  }
  delete(copiaId){

  }





}


