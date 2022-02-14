import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  ngOnInit() {
  }

  constructor(private menu: MenuController
  ) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.toggle('first');
  }


}
