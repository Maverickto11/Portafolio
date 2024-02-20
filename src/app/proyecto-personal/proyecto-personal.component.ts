import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import the MatDialog module
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-proyecto-personal',
  standalone: true,
  imports: [ProyectosComponent],
  templateUrl: './proyecto-personal.component.html',
  styleUrl: './proyecto-personal.component.css'
})
export class ProyectoPersonalComponent {
  Mario = '../../assets/img/Mario.png';
  showAviso: boolean = false;
  currentDialogRef: MatDialogRef<any> | undefined;
  constructor(public matDialog: MatDialog) {} // Inyecta MatDialog y MAT_DIALOG_DATA
}
