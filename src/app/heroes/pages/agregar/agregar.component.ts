import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interfece';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarDeleteComponent } from '../../components/confirmar-delete/confirmar-delete.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // url -> /heroes/editar/dc-superman
    if (this.router.url.includes('editar') == true) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroe(id))
        )
        .subscribe(heroe => this.heroe = heroe)
    }
  }

  registrarHeroe() {
    if (this.heroe.superhero.trim().length == 0) return;

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(
          (heroe) => this.openSnackBar(`Se actualizo el heroe... ${heroe.superhero}`)
        )
    } else {
      this.heroesService
        .crearHeroe(this.heroe)
        .subscribe(
          (heroe) => {
            // console.log(heroe);
            this.openSnackBar(`Se creo el heroe... ${heroe.superhero}`)
            this.router.navigate(['/heroes/editar', heroe.id])
          }
        );

    }
  }


  deleteHeroe() {

    const resMatDialog = this.matDialog.open(
      ConfirmarDeleteComponent,
      {
        // width: '250px',
        // data: { ...this.heroe }, // copia
        data: this.heroe, // referencia
      }
    );

    resMatDialog
      .afterClosed()
      .subscribe(
        (reponse) => {

          if (reponse == false) return;

          this.heroesService
            .deleteHeroe(this.heroe.id!)
            .subscribe(
              () => {
                this.router.navigate(['/heroes'])
              }
            );
        }
      )
  }

  openSnackBar(msg: string) {
    this.matSnackBar.open(
      msg,
      'OK!',
      {
        duration: 2500
      }
    );
    // this.matSnackBar.openFromComponent(PizzaPartyComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });
  }

}
