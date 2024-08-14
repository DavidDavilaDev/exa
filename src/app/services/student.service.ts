import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) { }

  registerStudent(studentData: any): Observable<any> {
    const registerUrl = `${this.apiUrl}`; // URL para registrar el estudiante
    return this.http.post(registerUrl, studentData);
  }
  

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
