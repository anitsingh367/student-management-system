import { NewStudentComponent } from './new-student/new-student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnrollStudentComponent } from './enroll-student/enroll-student.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListStudentComponent } from './list-student/list-student.component';

@NgModule({
  declarations: [AppComponent, EnrollStudentComponent, NewStudentComponent, ListStudentComponent],
  entryComponents: [NewStudentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
