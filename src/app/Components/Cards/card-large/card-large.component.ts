import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrls: ['./card-large.component.css']
})
export class CardLargeComponent implements OnInit {

  @Input() title:string = 'Servicios Personalizados';
  @Input() img:string = 'ServicioPersonal.png';
  @Input() text:string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, vel, reiciendis. Quas voluptatibus in, ea saepe quo?.';

  constructor() { }

  ngOnInit() {
  }

}
