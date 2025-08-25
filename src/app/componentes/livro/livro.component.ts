import { Component, input } from '@angular/core';
import { InterfaceLivro } from './interface-livro';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [NgClass, CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = input.required<InterfaceLivro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
