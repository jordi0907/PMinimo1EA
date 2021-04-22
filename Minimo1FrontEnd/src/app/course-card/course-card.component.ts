import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;
  @Input()
  courseIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
