
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {
  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }


  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      usuario: [''],
      clave: ['']
    })
  }

  iniciarSesion() {
    localStorage.setItem('logueado','1')
    this.db.login(
      this.mainForm.value.usuario,
      this.mainForm.value.clave
    ).then((res) => {
      this.mainForm.reset();
      this.router.navigate(['inicio/'])
    }, async error => {
      let toast = await this.toast.create({
          message: 'Datos incorrectos',
          duration: 2500
        });
          toast.present();  
    })
  }


  // deleteSong(id){
  //   this.db.deleteSong(id).then(async(res) => {
  //     let toast = await this.toast.create({
  //       message: 'Song deleted',
  //       duration: 2500
  //     });
  //     toast.present();      
  //   })
  // }

}