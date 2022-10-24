
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interfece';

@Component({
  selector: 'app-confirmar-delete',
  templateUrl: './confirmar-delete.component.html',
  styleUrls: ['./confirmar-delete.component.css']
})
export class ConfirmarDeleteComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ConfirmarDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public heroe: Heroe,
  ) { }

  ngOnInit(): void {
    // console.log(this.heroe);

  }

  cancelar() {
    this.matDialogRef.close(false);
  }

  borrar() {
    this.matDialogRef.close(true);
  }

}
