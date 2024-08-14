import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.page.html',
  styleUrls: ['./student-register.page.scss'],
})
export class StudentRegisterPage {
  nombre: string = '';
  apellido: string = '';
  matricula: string = '';
  email: string = '';
  telefono: string = '';
  carrera: string = '';

  constructor(private studentService: StudentService, private router: Router) {} // Inyecta Router

  onSubmit() {
    const studentData = {
      nombre: this.nombre,
      apellido: this.apellido,
      matricula: this.matricula,
      email: this.email,
      telefono: this.telefono,
      carrera: this.carrera,
    };

    this.studentService.registerStudent(studentData).subscribe(response => {
      console.log('Estudiante registrado:', response);
      this.router.navigate(['/student-list']); // Redirige a la lista de estudiantes
    });
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
