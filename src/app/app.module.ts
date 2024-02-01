import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserModule
  ],
  exports: [MatDialogModule]

})
export class ModuloModule { }
