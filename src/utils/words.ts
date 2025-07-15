export type Challenges = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenges[] = [
  { id: 1, word: 'CSS', tip: 'Linguagem de estilos' },
  { id: 2, word: 'REACT', tip: 'Biblioteca para criar interfaces web' },
  { id: 3, word: 'HTML', tip: 'Linguagem de marcação' },
  {
    id: 4,
    word: 'Javascript',
    tip: 'Uma das linguagens de programação mais utilizadas no mundo',
  },
  { id: 5, word: 'Typescript', tip: 'Para adicionar tipagem no Javascript' },
]
