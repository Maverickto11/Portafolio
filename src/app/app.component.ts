import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './Skills/skills.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProyectosComponent, SkillsComponent]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  backgroundImagePath = './assets/img/Escritorio.webp';
  folderImagePath = 'assets/img/Carpeta.png';
  skills= './assets/img/Skills.png';  
  
  currentDialogRef: MatDialogRef<any> | undefined;

  
  openModal(): void {
    // Cierra el modal actual si existe
    if (this.currentDialogRef) {
      this.currentDialogRef.close();
    }

    // Abre el nuevo modal y guarda su referencia
    this.currentDialogRef = this.dialog.open(ProyectosComponent, {
      width: '64%', // Ancho máximo del modal
      height: '80%', // Altura máxima del modal
      maxWidth: '80vw', // Ancho máximo del modal en viewport units
      maxHeight: '80vh', // Altura máxima del modal en viewport units
      autoFocus: false, // Evita el enfoque automático en el primer elemento del modal
      hasBackdrop: false // Evita mostrar un fondo oscuro detrás del modal
    });

    this.currentDialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openModalSkills(): void {
    // Cierra el modal actual si existe
    if (this.currentDialogRef) {
      this.currentDialogRef.close();
    }

    // Abre el nuevo modal y guarda su referencia
    this.currentDialogRef = this.dialog.open(SkillsComponent, {
      width: '64%', // Ancho máximo del modal
      height: '80%', // Altura máxima del modal
      maxWidth: '80vw', // Ancho máximo del modal en viewport units
      maxHeight: '80vh', // Altura máxima del modal en viewport units
      autoFocus: false, // Evita el enfoque automático en el primer elemento del modal
      hasBackdrop: false // Evita mostrar un fondo oscuro detrás del modal
    });

    this.currentDialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
