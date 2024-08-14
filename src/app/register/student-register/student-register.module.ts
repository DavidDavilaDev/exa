import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { StudentRegisterPageRoutingModule } from './student-register-routing.module';
import { StudentRegisterPage } from './student-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentRegisterPageRoutingModule,
    ReactiveFormsModule  // Importa ReactiveFormsModule aquí
  ],
  declarations: [StudentRegisterPage]
})
export class StudentRegisterPageModule {}
