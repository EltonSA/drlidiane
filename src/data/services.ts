export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  includes: string[]
  image: string
  /** Imagem de fundo do card (formato post Instagram) */
  backgroundImage: string
}

export const services: ServiceItem[] = [
  {
    id: 'aposentadoria',
    title: 'Aposentadoria',
    subtitle: 'Cuidamos da sua aposentadoria do início ao fim',
    image: '/images/image1.png',
    backgroundImage: '/images/servico-1.png',
    includes: [
      'Análise do histórico contributivo',
      'Planejamento previdenciário',
      'Protocolo e acompanhamento no INSS',
      'Correções e recursos, se necessário',
    ],
  },
  {
    id: 'bpc-loas',
    title: 'Benefício Assistencial – BPC/LOAS',
    subtitle: 'Amparo garantido para quem mais precisa',
    image: '/images/Image2.png',
    backgroundImage: '/images/servico-2.png',
    includes: [
      'Análise de renda familiar',
      'Orientação documental',
      'Protocolo e acompanhamento do benefício',
      'Defesa em caso de indeferimento',
    ],
  },
  {
    id: 'revisao-cnis',
    title: 'Revisão e Acerto de CNIS',
    subtitle: 'Corrija falhas e aumente o valor do seu benefício',
    image: '/images/image3.png',
    backgroundImage: '/images/servico-3.png',
    includes: [
      'Verificação de vínculos trabalhistas incorretos',
      'Contribuições ausentes ou erradas',
      'Inconsistências que impactam o valor da aposentadoria',
    ],
  },
  {
    id: 'aposentadoria-mei',
    title: 'Aposentadoria para MEI',
    subtitle: 'O Microempreendedor também tem direitos previdenciários',
    image: '/images/image5.png',
    backgroundImage: '/images/servico-4.png',
    includes: [
      'Tipos de aposentadoria possíveis',
      'Complementação de contribuições',
      'Regularização de períodos',
      'Planejamento para o melhor benefício',
    ],
  },
]
