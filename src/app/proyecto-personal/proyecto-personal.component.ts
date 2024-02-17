import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import the MatDialog module
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-proyecto-personal',
  standalone: true,
  imports: [ProyectosComponent],
  templateUrl: './proyecto-personal.component.html',
  styleUrl: './proyecto-personal.component.css'
})
export class ProyectoPersonalComponent {

  constructor(private dialog: MatDialog) {} // Inject the MatDialog module into the component's constructor

  cerrarModal(): void {
    this.dialog.closeAll();
  }
}
