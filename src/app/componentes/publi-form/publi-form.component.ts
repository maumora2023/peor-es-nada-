import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, camera } from 'ionicons/icons';
import { Publicacion } from 'src/app/modelo/publicacion';

@Component({
  selector: 'app-publi-form',
  templateUrl: './publi-form.component.html',
  styleUrls: ['./publi-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PubliFormComponent implements OnInit {

  tituloStr: string = ""
  descripcionStr: string = ""
  picture: string | undefined

  @Output() onCreate = new EventEmitter<Publicacion>()
  mensaje: any = {}; // Inicializar mensaje como objeto

  constructor(private router: Router) { addIcons({ add, camera }) }

  ngOnInit() {
    this.picture = "https://cdn.diariodeavisos.com/wp-content/uploads/2017/02/fb-image-search.jpg"
  }

  onClick() {
    const publicacion: Publicacion = {
      ID: 1,
      titulo: this.tituloStr,
      foto: this.picture,
      descripcion: this.descripcionStr
    }
    this.onCreate.emit(publicacion)
    this.router.navigate(['home'])
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    })
    this.picture = image.dataUrl
    this.mensaje.image = this.picture // Asignar la imagen a mensaje.image
  }
}
