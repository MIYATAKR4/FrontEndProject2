function carregaDict() {
  var books = {
    book1: {
      nome: "A menina do outro lado",
      imagem: "https://i.postimg.cc/HkRqm2b3/totsukuni.jpg",
      descricao:
        "A Menina do Outro Lado é uma fábula sobre a criação do afeto e o amor entre duas criaturas tão diferentes, mas com muito a compartilhar. Uma trama atual sobre a condição do diferente e da falta de aceitação. Sobre largar seus medos e enfrentar a vida com um novo olhar.",
      citacao:
        "Você me aceitou do jeito que eu era. Como eu poderia não fazer o mesmo por você?",
      autor: "Nagabe",
    },

    book2: {
      nome: "A cegueira iminente de Billie Scott",
      imagem: "https://i.postimg.cc/LXR0405k/billie-scott.jpg",
      descricao:
        "Billie é uma jovem artista solitária e socialmente ansiosa, distante de sua família e vivendo em acomodações estudantis simples. Ela recebe uma oportunidade que pode mudar sua vida ao ser convidada a expor suas pinturas em uma galeria daqui a alguns meses. Pouco tempo depois, um incidente infeliz acontece enquanto ela busca inspiração para sua exposição, resultando em uma retina deslocada. Ela recebe a notícia que mudará sua vida: ficará completamente cega em questão de duas semanas. Embora fique compreensivelmente arrasada ao receber essa notícia, Billie decide sair pelo mundo e pintar retratos de dez pessoas interessantes para sua exposição. O livro narra sua jornada, à medida que ela encontra pessoas de diferentes origens, cria suas pinturas para sua estreia (e possivelmente última) exposição, enquanto enfrenta a realidade iminente de sua cegueira.",
      citacao:
      "Essa jornada nunca foi sobre a minha cegueira.",
      autor: "Zoe Thorogood",
    },
    
    book3: {
      nome: "É solitário no centro da terra",
      imagem: "https://i.postimg.cc/bYmF8ghb/its-lonely.jpg",
      descricao:
        "A cartunista Zoe Thorogood registra 6 meses de sua própria vida enquanto ela desmorona em uma tentativa desesperada de colocá-la de volta nos eixos da única maneira que ela conhece. 'É Solitário no Centro da Terra' é uma visão íntima e metanarrativa da vida de uma artista egoísta que deve criar para sua própria sobrevivência.",
      citacao:
        "Alguém, em algum lugar, neste exato momento, está sendo afetado pela sua existência.",
        autor: "Zoe Thorogood",
    },
    
    book4: {
      nome: "O livro dos pássaros",
      imagem: "https://i.postimg.cc/RFMXx6pX/livro-dos-passaros.jpg",
      descricao:
      "O Roberto é um Sabiá que não aguentou a pressão de ser um pássaro livre. Ele também queria comprar a sua própria TV Smart. Assim, ele acaba arranjando um emprego na Catch.co, uma startup 'Great Place to Work', descoladona e inovadora. O patrão é um gato esfomeado, mas o fato de ele contratar apenas pássaros deve ser mera coincidência...",
      citacao:
        "'Você não acha que a vida deveria ser mais do que isso?' 'Nah, só issso está ótimo.'",
      autor: "Lark",
    },

    book5: {
      nome: "Vidas Imperfeitas",
      imagem: "https://i.postimg.cc/9QZp4tvL/juno.jpg",
      descricao:
        "Juno Omura não é uma garota como outra qualquer e todos a conhecem por ser violenta, impaciente e impulsiva, o que afasta as pessoas dela. Entretanto, existe muito mais dentro dela do que se pode imaginar, cabendo apenas a Daniel descobrir os motivos de sua atitude e seu tenebroso passado. Uma história sobre amor, amizade, família e liberdade.",
      citacao:
        "Não importa quanto tempo passe, e nem mesmo o quão perdido você esteja, são as pessoas que escolheram estar ao nosso lado que fazem a vida valer a pena.",
      autor: "Mary Cagnin"
    },

    book6: {
      nome: "A Diferença Invisível",
      imagem: "https://i.postimg.cc/MGYm5ZZR/alt.jpg",
      descricao:
        "Marguerite tem 27 anos, e aparentemente nada a diferencia das outras pessoas. É bonita, vivaz e inteligente. Trabalha numa grande empresa e mora com o namorado. No entanto, ela é diferente. Marguerite se sente deslocada e luta todos os dias para manter as aparências. Sua rotina é sempre a mesma, e mudanças de hábito não são bem-vindas. Seu ambiente precisa ser um casulo. Ela se sente agredida pelos ruídos e pelo falatório incessante dos colegas. Cansada dessa situação, ela sai em busca de si mesma e descobre que tem um Transtorno do Espectro Autista – a síndrome de Asperger. Sua vida então se altera profundamente.",
      citacao:
        "As dificuldades de Marguerite permanecem as mesmas, mas foi a forma de enxergá-las que mudou completamente.",
      autor: "Mademoiselle Caroline e Julie Dachez",
    },
  };

  var content = document.getElementById("content");

  for (var book in books) {

    content.innerHTML +=
      '<div class="card">' +
      '<img class="sepia" src="' +
      books[book].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      books[book].nome +
      "</summary>" +
      "<p>" +
      books[book].descricao +
      "</p>" +
      "<blockquote><q>" +
      books[book].citacao +
      "</q></blockquote>" +
      "<p>Autor: " + 
      books[book].autor + 
      "</p>" +
      "</details></div>";
  }
}

carregaDict();
