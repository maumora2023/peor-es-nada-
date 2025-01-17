import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Publicacion } from 'src/app/modelo/publicacion';
import { cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PublicacionesService } from 'src/app/servicios/publicaciones.service';
import { PublicacionesComponent } from 'src/app/componentes/publicaciones/publicaciones.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PublicacionesComponent, RouterModule]
})
export class PublicacionPage implements OnInit {

  publicaciones : Publicacion[] = []

  constructor(private publiService:PublicacionesService) { addIcons({ cameraOutline }) }

  async ngOnInit() {
    this.publicaciones = await this.publiService.mostrarPublicaciones()
  }
}
