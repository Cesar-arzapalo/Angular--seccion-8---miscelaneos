import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) {
    this.id = parseInt(this.route.parent.snapshot.paramMap.get('id'), 10);
    console.log(this.id);
   }
  ngOnInit(): void {
  }

}
