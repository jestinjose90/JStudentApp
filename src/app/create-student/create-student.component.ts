import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
student: Student = new Student();
  constructor(private studentservice: StudentService,
    private router: Router ) { }

  ngOnInit(): void {
    }
 
    saveStudent() {
      this.studentservice.createStudent(this.student).subscribe(data =>{
        console.log(data);  
        this.goToStudentList(); 
      },
        error =>console.log(error));
    }

    goToStudentList() {
      this.router.navigate(['/students'])
    }
    onSubmit() {
      this.saveStudent();
    }
}
