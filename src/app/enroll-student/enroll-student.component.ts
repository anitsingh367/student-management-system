import { NewStudentComponent } from './../new-student/new-student.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css'],
})
export class EnrollStudentComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Add New Student'
    }

    this.dialog
      .open(NewStudentComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => console.log(result));
}

  ngOnInit(): void {}
}
