import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StudentData } from '../models/student-data.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentUrl = 'api/students'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  /**Get the List of Students from the server */
  getStudents(): Observable<StudentData[]> {
    return this.http.get<StudentData[]>(this.studentUrl).pipe(
      tap((_) => console.log('fetched Students')),
      catchError(this.handleError<StudentData[]>('getStudents', []))
    );
  }

  getStudentNo404<Data>(id: number): Observable<StudentData> {
    const url = `${this.studentUrl}/?id=${id}`;
    return this.http.get<StudentData[]>(url).pipe(
      map((students) => students[0]),
      tap((s) => {
        const outcome = s ? `fetched` : `did not find`;
        console.log(`${outcome} student id = ${id}`);
      }),
      catchError(this.handleError<StudentData>(`getStudent id = ${id}`))
    );
  }

  getStudent(id: number): Observable<StudentData> {
    const url = `${this.studentUrl}/${id}`;
    return this.http.get<StudentData>(url).pipe(
      tap((_) => console.log(`fetched student id=${id}`)),
      catchError(this.handleError<StudentData>(`getStudent id=${id}`))
    );
  }

  //////// Save methods //////////

  addStudent(student: StudentData): Observable<StudentData> {
    return this.http
      .post<StudentData>(this.studentUrl, student, this.httpOptions)
      .pipe(
        tap((newStudent: StudentData) =>
          console.log(`added student w/ id=${newStudent.id}`)
        ),
        catchError(this.handleError<StudentData>('addStudent'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteStudent(student: StudentData | number): Observable<StudentData> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<StudentData>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<StudentData>('deleteStudent'))
    );
  }

  /** PUT: update the hero on the server */
  updateStudent(student: StudentData): Observable<any> {
    return this.http.put(this.studentUrl, student, this.httpOptions).pipe(
      tap((_) => console.log(`updated student id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
