// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],       // necesario para ngIf, ngFor, etc.
  template: `
    <h1>Bienvenido</h1>
    <p>My first component</p>
    <div>
    </div>
  `,
  styleUrls: ['./home.scss'],    // siempre en array
})
export class HomeComponent {

protected header(){


}



}

