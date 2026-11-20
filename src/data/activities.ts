export type Activity = {
  title: string
  subtitle: string
  description: string
  image?: string
  icon: 'music' | 'drama' | 'chess' | 'computer' | 'dance'
  accent: string
}

export const activities: Activity[] = [
  {
    title: 'Balé',
    subtitle: 'Movimento e disciplina',
    description:
      'Uma actividade que incentiva a expressão corporal, a coordenação motora, a concentração e a criatividade.',
    image: '/images/galeria/bale.jpg',
    icon: 'dance',
    accent: 'pink',
  },
  {
    title: 'Dança',
    subtitle: 'Cultura e expressão',
    description:
      'Um espaço para explorar ritmos, desenvolver a expressão artística e valorizar a criatividade dos alunos.',
    image: '/images/galeria/danca-tradicional.jpg',
    icon: 'music',
    accent: 'orange',
  },
  {
    title: 'Teatro',
    subtitle: 'Imaginação e comunicação',
    description:
      'Estimula a comunicação, a confiança, a colaboração e a capacidade de contar histórias.',
    image: '/images/galeria/teatro-trajes.jpg',
    icon: 'drama',
    accent: 'purple',
  },
  {
    title: 'Xadrez',
    subtitle: 'Estratégia e raciocínio',
    description:
      'Desenvolve o pensamento lógico, a concentração, o planeamento e a tomada de decisões.',
    image: '/images/galeria/xadrez.jpg',
    icon: 'chess',
    accent: 'blue',
  },
  {
    title: 'Tecnologias de Informação e Comunicação',
    subtitle: 'Competências para o futuro',
    description:
      'Promove o contacto com ferramentas digitais e incentiva a utilização consciente da tecnologia.',
    image: '/images/galeria/laboratorio-informatica.jpg',
    icon: 'computer',
    accent: 'green',
  },
]

export const gallery = [
  { src: '/images/galeria/coral-festival-africano.jpg', alt: 'Coral de alunos e professores com trajes africanos no festival cultural', label: 'Festival cultural' },
  { src: '/images/galeria/teatro-trajes.jpg', alt: 'Dois alunos com trajes de teatro, um deles com coroa dourada', label: 'Teatro' },
  { src: '/images/galeria/xadrez.jpg', alt: 'Alunos a jogar xadrez', label: 'Xadrez' },
  { src: '/images/galeria/bale.jpg', alt: 'Alunas numa actividade de balé', label: 'Balé' },
  { src: '/images/galeria/desporto.jpg', alt: 'Alunos a jogar futebol no recinto escolar', label: 'Desporto' },
  { src: '/images/galeria/professores-danca.jpg', alt: 'Professores a dançar durante a celebração cultural', label: 'Professores em festa' },
  { src: '/images/galeria/danca-tradicional.jpg', alt: 'Alunas a apresentar uma dança tradicional', label: 'Dança' },
  { src: '/images/galeria/laboratorio-informatica.jpg', alt: 'Alunos no laboratório de informática', label: 'Informática' },
]
