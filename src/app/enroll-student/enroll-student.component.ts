import { StudentService } from './../service/student.service';
import { StudentData } from './../models/student-data.interface';
import { NewStudentComponent } from './../new-student/new-student.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css'],
})
export class EnrollStudentComponent implements OnInit {

  @Output() listUpdated = new EventEmitter<Boolean>();

  students: StudentData[];

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Add New Student',
    };

    this.dialog
      .open(NewStudentComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        // Notify the List Student Component to refresh list
        this.listUpdated.emit(true);

        // console.log(result)
      });
  }

  ngOnInit(): void {}
}
