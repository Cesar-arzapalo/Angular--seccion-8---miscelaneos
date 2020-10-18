import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) {
    this.id = parseInt(this.route.parent.snapshot.paramMap.get('id'), 10);
    console.log(this.id);
   }
  ngOnInit(): void {
  }

}
