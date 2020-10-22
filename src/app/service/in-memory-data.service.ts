import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StudentData } from '../models/student-data.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
        { id: 1, name: 'Anit Singh', course: 'PCM' },
        { id: 2, name: 'Anit Singh', course: 'PCM' },
        { id: 3, name: 'Anit Singh', course: 'PCM' },
        { id: 4, name: 'Anit Singh', course: 'PCM' },
        { id: 5, name: 'Anit Singh', course: 'PCM' },
        { id: 6, name: 'Anit Singh', course: 'PCM' },
        { id: 7, name: 'Anit Singh', course: 'PCM' },
        { id: 8, name: 'Anit Singh', course: 'PCM' },
    ];
    return {students};
  }

  genId(students: StudentData[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/