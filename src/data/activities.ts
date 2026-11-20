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
    image: '/images/galeria/actividade-cultural.jpg',
    icon: 'music',
    accent: 'orange',
  },
  {
    title: 'Teatro',
    subtitle: 'Imaginação e comunicação',
    description:
      'Estimula a comunicação, a confiança, a colaboração e a capacidade de contar histórias.',
    image: '/images/galeria/apresentacao-artistica.jpg',
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
  { src: '/images/galeria/laboratorio-informatica.jpg', alt: 'Espaço de informática do Externato Fátima', label: 'Informática' },
  { src: '/images/galeria/sala-de-aula.jpg', alt: 'Sala de aula', label: 'Ambiente de aprendizagem' },
  { src: '/images/galeria/actividade-cultural.jpg', alt: 'Actividade cultural dos alunos', label: 'Cultura' },
  { src: '/images/galeria/xadrez.jpg', alt: 'Aluno numa actividade de xadrez', label: 'Xadrez' },
  { src: '/images/galeria/bale.jpg', alt: 'Alunas numa actividade de balé', label: 'Balé' },
  { src: '/images/galeria/premiacao.jpg', alt: 'Medalhas de participação e premiação', label: 'Conquistas' },
  { src: '/images/galeria/desporto.jpg', alt: 'Actividade desportiva escolar', label: 'Desporto' },
  { src: '/images/galeria/apresentacao-artistica.jpg', alt: 'Apresentação artística', label: 'Expressão artística' },
]
