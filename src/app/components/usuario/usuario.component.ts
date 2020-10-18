import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log(this.id);
   }

  ngOnInit(): void {
  }
}
