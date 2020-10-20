import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  form: FormGroup;
  description: string;
  name: string;
  course: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewStudentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.name, []],
      course: [this.course, []],
    });
  }
  save() {

    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
