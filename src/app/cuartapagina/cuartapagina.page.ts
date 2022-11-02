import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-cuartapagina',
  templateUrl: './cuartapagina.page.html',
  styleUrls: ['./cuartapagina.page.scss'],
})
export class CuartapaginaPage implements OnInit {
  picture: string;
  constructor(
    
  ) {}

  async takepicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    
    this.picture = image.dataUrl;
  }

  ngOnInit() {
  }

  

}
