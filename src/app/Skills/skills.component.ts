import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import the MatDialog module

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  constructor(private dialogRef: MatDialog) {} // Declare a private variable dialogRef of type MatDialog

  cerrarModal(): void {
    this.dialogRef.closeAll();
  }
}
