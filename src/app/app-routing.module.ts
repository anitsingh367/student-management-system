import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollStudentComponent } from './enroll-student/enroll-student.component';

const routes: Routes = [
  { path: '', component: EnrollStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
