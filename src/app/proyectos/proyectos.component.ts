import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  carpetaCrud = '../../assets/img/archivo.png';
  Mario = '../../assets/img/Mario.png';
  constructor(public dialogRef: MatDialog) {}
    
  cerrarModal(): void {
      this.dialogRef.closeAll();
    }
}
