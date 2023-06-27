function carregaDict() {
  var bios = {
    bio1: {
      nome: "Angela Davis",
      imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
      descricao:
        "Angela Yvonne Davis é uma renomada professora e filósofa socialista norte-americana que ganhou destaque em todo o mundo na década de 1970. Ela se tornou conhecida como membro do Partido Comunista dos Estados Unidos e dos Panteras Negras, devido ao seu ativismo incansável em prol dos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos. Além disso, Angela Davis ficou famosa por ser uma figura central em um dos julgamentos criminais mais controversos e célebres da história recente dos Estados Unidos.",
      citação:
        "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
    },

    bio2: {
      nome: "Carolina Maria de Jesus",
      imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
      descricao:
        "Carolina Maria de Jesus foi uma renomada escritora brasileira, reconhecida principalmente pelo seu livro Quarto de Despejo: Diário de uma Favelada, publicado em 1960. Ela é considerada uma das primeiras e mais importantes escritoras negras do Brasil. Durante grande parte de sua vida, a autora residia na favela do Canindé, localizada na zona norte de São Paulo, e sustentava a si mesma e seus três filhos como catadora de papel. Em 1958, seu diário foi publicado com o título Quarto de Despejo, com a colaboração do jornalista Audálio Dantas. O livro alcançou um enorme sucesso e foi traduzido para catorze idiomas diferentes.",
      citacao:
        "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
    },
    
    bio3: {
      nome: "Conceição Evaristo",
      imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
      descricao:
        "Maria da Conceição Evaristo de Brito nasceu em 1946 em Belo Horizonte. Vinda de uma família de origem humilde, ela se mudou para o Rio de Janeiro na década de 1970. Formou-se em Letras pela UFRJ e dedicou-se ao ensino na rede pública da capital fluminense. Além disso, obteve o título de Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação intitulada Literatura Negra: uma poética de nossa afro-brasilidade (1996). Posteriormente, concluiu seu doutorado em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011). Nessa pesquisa, Maria da Conceição Evaristo estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira, em contraponto à obra do angolano Agostinho Neto.",
      citacao:
        "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
    },
    
    bio4: {
      nome: "Lélia Gonzalez",
      imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
      descricao:
        "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira.Ajudou a fundar instituições como o Movimento Negro Unificado(MNU), o Instituto de Pesquisas das Culturas Negras(IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum.Sua militância em defesa da mulher negra levou- a ao Conselho Nacional dos Direitos da Mulher(CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo- se primeira suplente.Nas eleições seguintes, em 1986, candidatou - se a deputada estadual pelo PDT, novamente elegendo - se suplente.",
      citacao:
        "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
    },

    bio5: {
      nome: "Marielle Franco",
      imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
      descricao:
        "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.",
      citacao:
        "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
    },

    bio6: {
      nome: "Rosa Parks",
      imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
      descricao:
        "Rosa Louise McCauley, mais conhecida como Rosa Parks, foi uma costureira negra norte-americana que se tornou um símbolo importante do movimento dos direitos civis dos negros nos Estados Unidos. No dia 1º de dezembro de 1955, Rosa Parks ficou famosa por se recusar veementemente a ceder seu lugar no ônibus a um passageiro branco. Esse ato corajoso foi o estopim para o movimento conhecido como boicote aos ônibus de Montgomery, que marcou o início da luta contra a segregação racial nos Estados Unidos. A ação de Rosa Parks se tornou um marco histórico e um exemplo poderoso de resistência e determinação na luta pelos direitos civis.",
      citacao:
        "Você nunca deve ter medo do que está fazendo quando está certo.",
    },
  };

  var content = document.getElementById("content");

  for (var bio in bios) {

    content.innerHTML +=
      '<div class="card">' +
      '<img class="sepia" src="' +
      bios[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      bios[bio].nome +
      "</summary>" +
      "<p>" +
      bios[bio].descricao +
      "</p>" +
      "<blockquote><q>" +
      bios[bio].citacao +
      "</q></blockquote>" +
      "</details></div>";

  }
}

carregaDict();
