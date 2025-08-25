import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/interface-livro';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroComponent, 
    CommonModule,
    NgClass],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {

  genero = input.required<GeneroLiterario>();
}
