
import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-regristro',
  templateUrl: './regristro.page.html',
  styleUrls: ['./regristro.page.scss'],
})
export class RegristroPage implements OnInit {
  formularioregistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController, public router: Router) {
    this.formularioregistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmarpassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioregistro.value;
    
    if(this.formularioregistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'LLenar todos los datos.',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
      }
      
      var usuario = {
        nombre: f.nombre,
        password: f.password,
      }
      localStorage.setItem('usuario',JSON.stringify(usuario))
      this.router.navigate(['home']);
    }
  }
