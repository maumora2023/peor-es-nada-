import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from '../componentes/publicaciones/publicaciones.component';
import { PubliListComponent } from '../componentes/publi-list/publi-list.component';
import { Publicacion } from '../modelo/publicacion';
import { PublicacionesService } from '../servicios/publicaciones.service';
import { addIcons } from 'ionicons';
import { add, addCircle, trash } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonContent, IonFab } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFab, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, PublicacionesComponent, PubliListComponent, IonButtons, IonButton, IonIcon, RouterModule],
})
export class HomePage implements OnInit {

  publicacion:Publicacion[] = []
  listaPublicaciones:Publicacion[] = []

  constructor(
    private publiService:PublicacionesService
  ) {
    addIcons({ addCircle, trash, add})
  }

  async _actualizar(){ 
    this.listaPublicaciones = await this.publiService.mostrarPublicaciones()
  }

  async ngOnInit(): Promise<void> {
    await this.publiService.iniciarPlugin()
    await this._actualizar()
  }

  async ionViewWillEnter() { 
    await this._actualizar()
  }
}
