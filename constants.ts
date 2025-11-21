
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Harmony',
    tagline: 'Ouça naturalmente.',
    description: 'Áudio que parece o ar livre. Construído com tecido acústico quente e composto de arenito reciclado.',
    longDescription: 'Experimente o som como ele deve ser ouvido — livre e orgânico. Os fones de ouvido Harmony apresentam nossa tecnologia exclusiva de driver open-air, envolta em um tecido acústico respirável que se adapta à sua temperatura. O arco é feito de um composto de arenito reciclado, oferecendo uma textura única e fria ao toque que o conecta ao momento presente.',
    price: 429,
    category: 'Áudio',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1524678606372-565ae0f98944?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Cancelamento de Ruído Orgânico', '50h de Bateria', 'Palco Sonoro Natural']
  },
  {
    id: 'p2',
    name: 'Epoch',
    tagline: 'Momentos, não minutos.',
    description: 'Um relógio projetado para o bem-estar. Caixa de cerâmica com pulseira feita de couro vegano sustentável.',
    longDescription: 'O tempo não é uma sequência de números, mas um fluxo de momentos. O Epoch repensa a interface do smartwatch, usando uma tela híbrida E-Ink calma que imita papel. Ele monitora o estresse através da temperatura da pele e variabilidade da frequência cardíaca, vibrando suavemente para lembrá-lo de respirar. A caixa de cerâmica é hipoalergênica e suave, polida à mão por 48 horas.',
    price: 349,
    category: 'Vestíveis',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Monitoramento de Estresse', 'Tela Híbrida E-Ink', 'Bateria de 7 Dias']
  },
  {
    id: 'p3',
    name: 'Canvas',
    tagline: 'Capture o calor.',
    description: 'Uma tela que imita as propriedades do papel. Suave para os olhos, vívida em cores e texturizada ao toque.',
    longDescription: 'Telas não deveriam parecer como olhar para uma lâmpada. O Canvas usa um painel OLED fosco nano-gravado que dispersa a luz ambiente, criando uma tela que parece papel de revista de alta qualidade. Perfeito para ler, desenhar ou exibir arte, trazendo um calor tátil para sua vida digital.',
    price: 1099,
    category: 'Portáteis',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['OLED tipo Papel', 'Lente Retrato', 'Textura de Arenito']
  },
  {
    id: 'p4',
    name: 'Essence',
    tagline: 'Retorne à natureza.',
    description: 'Um purificador de ar que também é uma escultura. Silencioso, difunde aromas naturais sutis enquanto limpa seu espaço.',
    longDescription: 'Ar puro é a base de uma mente clara. O Essence usa um biofiltro à base de musgo combinado com tecnologia HEPA para eliminar poluentes de sua casa. Ele difunde gentilmente óleos essenciais naturais — cedro, bergamota e chuva — orquestrados para combinar com a hora do dia.',
    price: 599,
    category: 'Casa',
    imageUrl: 'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
        'https://images.pexels.com/photos/8092420/pexels-photo-8092420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Biofiltro HEPA', 'Aromaterapia', 'Modo Noturno Silencioso']
  },
  {
    id: 'p5',
    name: 'Beam',
    tagline: 'Luz que respira.',
    description: 'Iluminação circadiana inteligente que segue o sol. Projeta um brilho quente, semelhante a uma vela, à noite.',
    longDescription: 'A luz artificial perturba nossos ritmos naturais. O Beam sincroniza com o nascer e o pôr do sol local, fornecendo luz fria e energizante durante o dia e transitando para um brilho âmbar quente, livre de luz azul, à noite. Os controles são sem toque; um simples aceno de mão ajusta o brilho.',
    price: 249,
    category: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1540932296235-d84931b6370b?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Sincronia de Ritmo Circadiano', 'Dimerização Quente', 'Controle Sem Toque']
  },
  {
    id: 'p6',
    name: 'Scribe',
    tagline: 'Pensamento em movimento.',
    description: 'Uma caneta digital com o atrito do grafite. Carrega sem fio quando fixada magneticamente ao Canvas.',
    longDescription: 'A conexão entre a mão e o cérebro é sagrada. A Scribe apresenta uma ponta de elastômero personalizada que replica o atrito microscópico do grafite no papel. Pesada perfeitamente para o equilíbrio, ela desaparece em sua mão, deixando apenas seus pensamentos.',
    price: 129,
    category: 'Portáteis',
    imageUrl: 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
        'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.unsplash.com/photo-1517260487576-8977430081d3?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Latência Zero', 'Ponta Texturizada', 'Carregamento Sem Fio']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "A Psicologia da Textura",
        date: "12 de Abril, 2025",
        excerpt: "Por que nossas pontas dos dedos anseiam por superfícies naturais em um mundo de vidro e plástico.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "Vivemos em um mundo sem atrito. Nossos telefones são de vidro liso, nossos laptops de alumínio polido, nossas bancadas de quartzo projetado. Não há resistência, nem grão, nem textura. E, no entanto, nossa biologia anseia por isso."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "As pontas dos dedos estão entre as partes mais densamente inervadas do corpo humano. Elas são projetadas para ler a história de um objeto — sua idade, sua origem, sua temperatura. Quando negamos a elas essa entrada, experimentamos uma forma sutil de privação sensorial."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"Tocar é saber. Sentir é estar conectado.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Na IAureo, projetamos para a mão tanto quanto para o olho. Escolhemos materiais que têm voz. Arenito que aquece sob sua palma. Tecido que tem uma trama que você pode traçar. Madeira que lembra a floresta."
            )
        )
    },
    {
        id: 2,
        title: "Vivendo com Menos",
        date: "28 de Março, 2025",
        excerpt: "Uma conversa com o arquiteto Hiroshi Nakamura sobre a arte do espaço vazio.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "O vazio não é o nada. Na arquitetura japonesa, o conceito de ",
                React.createElement("em", null, "Ma"),
                " refere-se ao espaço entre as coisas — a pausa que dá forma ao todo."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "\"Tendemos a preencher nossas vidas com ruído,\" diz Nakamura, tomando chá em seu estúdio com vista para as ruas molhadas pela chuva de Kyoto. \"Compramos mais dispositivos para economizar tempo, mas acabamos com menos tempo do que nunca. O verdadeiro luxo é a ausência de intrusão.\""
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "A sala está vazia"),
                React.createElement("p", null, "Mas cheia de luz."),
                React.createElement("p", null, "A mente está quieta"),
                React.createElement("p", null, "Mas cheia de pensamento."),
                React.createElement("p", null, "Este é o peso"),
                React.createElement("p", null, "De viver com menos.")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Essa filosofia impulsiona cada curva de nossa nova coleção. Perguntamos a nós mesmos: o que podemos remover? Quanto podemos tirar até que reste apenas o essencial?"
            )
        )
    },
    {
        id: 3,
        title: "Moodboard de Primavera",
        date: "15 de Março, 2025",
        excerpt: "Notas do estúdio de design: neblina da manhã, pedra molhada e linho pálido.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "A primavera no estúdio é um momento de despertar. A luz muda dos ângulos baixos e duros do inverno para um brilho mais suave e difuso. Nos sentimos atraídos por tons mais pálidos — o cinza do pavimento molhado, o creme do linho não branqueado, o verde empoeirado da sálvia."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Nosso moodboard deste mês é um estudo sobre suavidade. É sobre o estado de transição — nem frio nem quente, nem escuro nem brilhante. É o amanhecer do ano."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
                React.createElement("p", null, "Broto verde empurrando através"),
                React.createElement("p", null, "Pedra cinza fria contra a pele"),
                React.createElement("p", null, "O sol aquece o ar.")
            )
        )
    }
];

export const BRAND_NAME = 'IAureo';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';
