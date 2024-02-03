import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './Skills/skills.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProyectosComponent, SkillsComponent]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  backgroundImagePath = 'assets/img/Escritorio.webp';
  folderImagePath = 'assets/img/Carpeta.png';
  skills= './assets/img/Skills.png';

  
  openModal(): void {
    const dialogRef = this.dialog.open(ProyectosComponent, {
      /*width: '23cm'*/
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openModalSkills(): void {
    const dialogRef = this.dialog.open(SkillsComponent, {
      /*width: '23cm'*/
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
