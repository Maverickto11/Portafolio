import { Component, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProyectoPersonalComponent } from '../proyecto-personal/proyecto-personal.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [ProyectoPersonalComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  carpetaCrud = '../../assets/img/archivo.png';

  constructor(public dialog: MatDialog) {}
  currentDialogRef: MatDialogRef<any> | undefined;

  dialogRef: MatDialogRef<ProyectoPersonalComponent> | undefined; // Define una variable para almacenar la referencia al modal
  mostrarAviso: boolean = true;

  openModal(): void {
    this.mostrarAviso = false;
    if (this.currentDialogRef) {
      // Si el modal ya está abierto, no es necesario abrirlo de nuevo
      return;
    }

    this.currentDialogRef = this.dialog.open(ProyectoPersonalComponent, {
      width: '25%',
      height: '65%',
      maxWidth: '80vw',
      maxHeight: '80vh',
      autoFocus: false,
      hasBackdrop: false,
      position: {
        right: '21%'
      }
    });
    if (this.currentDialogRef.componentInstance) {
      this.currentDialogRef.componentInstance.closeModal = this.closeModal.bind(this);
    }
    
  }

    closeModal(): void {
      // Cierra el modal si existe
      if (this.currentDialogRef) {
        this.currentDialogRef.close();
        this.currentDialogRef = undefined; // Limpia la referencia
      }
    }
}

