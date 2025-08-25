export interface InterfaceLivro {
    titulo: string;
    autoria: string;
    imagem: string;
    genero: GeneroLiterario;
    favorito: boolean;
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: InterfaceLivro[]
}
