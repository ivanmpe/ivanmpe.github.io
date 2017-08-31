import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-finaliza',
  templateUrl: './button-finaliza.component.html',
  styleUrls: ['./button-finaliza.component.css']
})
export class ButtonFinalizaComponent implements OnInit {

  constructor() { }

  finalizarCompra(){
    alert("Finaliza compra");
  }

  ngOnInit() {
  }

}
