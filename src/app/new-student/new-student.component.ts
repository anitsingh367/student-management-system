import { StudentService } from './../service/student.service';
import { StudentData } from './../models/student-data.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  students: StudentData[];
  form: FormGroup;
  title: string;
  name: string;
  course: string;

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewStudentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.name, []],
      course: [this.course, []],
    });
  }
  save() {
    this.dialogRef.close(this.form.value);

    if (!this.form.value) {
      return;
    }

    this.studentService.addStudent(this.form.value)
    .subscribe((result) => {
      console.log('Student added result: ', result)
    });
  }

  close() {
    this.dialogRef.close();
  }
}
