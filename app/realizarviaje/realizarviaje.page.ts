import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-realizarviaje',
  templateUrl: './realizarviaje.page.html',
  styleUrls: ['./realizarviaje.page.scss'],
})
export class RealizarviajePage implements OnInit {


  crearViajes : FormGroup;

  constructor(private storage: Storage, private router: Router, private formBuilder:FormBuilder) {

    this.crearViajes = this.formBuilder.group({
      'destino': new FormControl(""),
      'salida': new FormControl(""),
      'fecha': new FormControl(""),
      'hora':new FormControl(""),
      'precio': new FormControl("")

    });

    var viaje: any;

    viaje = {
      destino: "Santiago",
      salida: "Melipilla",
      fecha: "09/11/2021",
      hora: "15:00",
      precio: "2000"
    }
  
    storage.set('viaje', new Array())
  }


  ngOnInit() {
  }

  next(){

    var Form = this.crearViajes.value;
    this.storage.get('viaje').then(val=>{
      val.push({'destino': Form.destino, 'salida': Form.salida,'fecha': Form.fecha,'hora': Form.hora, 'precio': Form.precio})
      this.storage.set('viaje', val)
      console.log(val)
    })


    this.router.navigate(['solicitarviaje/'])

  }

}
