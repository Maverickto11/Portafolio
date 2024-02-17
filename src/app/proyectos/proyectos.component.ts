import { Component } from '@angular/core';
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
  Mario = '../../assets/img/Mario.png';
  constructor(public dialog: MatDialog) {}
  currentDialogRef: MatDialogRef<any> | undefined;
  showAviso: boolean = true;

  dialogRef: MatDialogRef<ProyectoPersonalComponent> | undefined; // Define una variable para almacenar la referencia al modal


  openModal(): void {
    this.showAviso = false;
    // Cierra el modal actual si existe
    if (this.currentDialogRef) {
      this.currentDialogRef.close();
    }

    // Abre el nuevo modal y guarda su referencia
    this.currentDialogRef = this.dialog.open(ProyectoPersonalComponent, {
      width: '25%', // Ancho máximo del modal
      height: '65%', // Altura máxima del modal
      maxWidth: '80vw', // Ancho máximo del modal en viewport units
      maxHeight: '80vh', // Altura máxima del modal en viewport units
      autoFocus: false, // Evita el enfoque automático en el primer elemento del modal
      hasBackdrop: false, // Evita mostrar un fondo oscuro detrás del modal
      position: {
        right: '21%'
      }
    });
    const modalElement = this.currentDialogRef.componentInstance.hostViewContainerRef.element.nativeElement;
    document.querySelector('.modal-content')?.appendChild(modalElement);
   
  }
  closeModal(): void {
    // Cierra el modal si existe
    if (this.currentDialogRef) {
      this.currentDialogRef.close();
      this.currentDialogRef = undefined; // Limpia la referencia
    }
  }
}
