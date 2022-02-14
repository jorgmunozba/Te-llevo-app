import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-solicitarviaje',
  templateUrl: './solicitarviaje.page.html',
  styleUrls: ['./solicitarviaje.page.scss'],
})
export class SolicitarviajePage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  mostrar(){
    this.storage.get("destino").then(val =>{
      console.log(val)
    })
  }

}
