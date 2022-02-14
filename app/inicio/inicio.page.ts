import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit{


  


  ngAfterViewInit(){
  
    this.animationCtrl.create()
    .addElement(document.querySelector('.square'))
    .duration(2200)
    .keyframes([
      {offset:0,'transform':'translate(-30px)'},
      {offset:1,'transform':'translate(240px)'}
  ])
    .iterations(Infinity)
    .play();
    


  }
  
  ngOnInit() {
  }

  constructor(private menu: MenuController,
    
    private animationCtrl: AnimationController) {}




  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.toggle('first');
  }




}
