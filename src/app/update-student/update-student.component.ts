import { StudentService } from './../service/student.service';
import { StudentData } from './../models/student-data.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  student: StudentData = {
    id: -1,
    name: '',
    course: ''
  };
  form: FormGroup;
  title: string;
  id: number;
  name: string;
  course: string;

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateStudentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
    this.id = data.studentID;
  }

  ngOnInit(): void {
    this.getStudents();
    this.form = this.fb.group({
      id: [this.id, []],
      name: [this.name, []],
      course: [this.course, []],
    });
  }

  getStudents(): void {
    const id = this.id;
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
  
  close() {
    this.dialogRef.close();
  }
}
