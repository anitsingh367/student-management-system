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
    if (this.form.value.name && this.form.value.course) {
      this.dialogRef.close(this.form.value);
      this.studentService.addStudent(this.form.value).subscribe((result) => {
        // console.log('Student added result: ', result)
      });
    } else {
      alert('Please enter the required fields');
    }
  }

  close() {
    this.dialogRef.close();
  }
}
