import { UpdateStudentComponent } from './../update-student/update-student.component';
import { StudentService } from './../service/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { StudentData } from '../models/student-data.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {

  @Input() refreshListEvent: boolean;

  displayedColumns: string[] = [
    'id',
    'name',
    'course',
    'updateStudent',
    'deleteStudent',
  ];
  STUDENT_DATA: StudentData[];

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    console.log('Refreshing List!');
    this.studentService.getStudents().subscribe((studentArray) => {
      this.STUDENT_DATA = studentArray;
    } );

  }

  updateStudent(studentID: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Update Student',
      studentID: studentID,
    };
    this.dialog
      .open(UpdateStudentComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        if (result)
          this.studentService.updateStudent(result).subscribe(() => this.refreshList());
      });

    console.log(studentID);
  }

  deleteStudent(student: StudentData) {
    if( confirm("Are you sure to delete " + student.name) ) {
      this.studentService.deleteStudent(student.id)
      .subscribe((result) => {
        console.log(result);
        this.refreshList();
      });
    }
  }
}
