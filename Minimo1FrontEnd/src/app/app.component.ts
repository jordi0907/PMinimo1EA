import { Component, OnInit } from '@angular/core';
import { arraynumeros, numeros } from 'src/datos';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  courses: Course[];
  constructor (public coursesService: CoursesService){


  }

  ngOnInit(){
/*       this.coursesService.loadCourses()
      .subscribe( courses => {
        this.courses = courses;
      }) */
  }



  /* courses: Course[] = COURSES; */
/*
  alphas: string[] = ["1", "2", "3", "4"];


  num1: any = numeros[1];

  numero1: any= arraynumeros; */


}
