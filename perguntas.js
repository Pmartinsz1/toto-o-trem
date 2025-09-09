const perguntas = {
"Administração Civil": [
    { pergunta:"Função principal?", opcoes:{A:"Gerir serviços públicos",B:"Lutar em batalhas",C:"Escrever poemas"}, correta:"A"},
    { pergunta:"Quem a Administração Civil atende diretamente?", opcoes:{A:"Soldados",B:"Cidadãos do império",C:"Médicos"}, correta:"B"},
    { pergunta:"Qual área é responsabilidade da Administração Civil?", opcoes:{A:"Educação e transporte",B:"Estratégia militar",C:"Produção artística"}, correta:"A"},
    { pergunta:"Como a Administração Civil ajuda no império?", opcoes:{A:"Vendendo produtos",B:"Organizando serviços essenciais",C:"Combatendo inimigos"}, correta:"B"},
    { pergunta:"Qual valor deve guiar a Administração Civil?", opcoes:{A:"Força bruta",B:"Segredo absoluto",C:"Eficiência e transparência"}, correta:"C"}
],
"Política": [
    { pergunta:"Função principal?", opcoes:{A:"Criar e debater leis",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Como representar o povo?", opcoes:{A:"Nada",B:"Defendendo interesses públicos",C:"Aleatório"}, correta:"B"},
    { pergunta:"Qual habilidade essencial?", opcoes:{A:"Cantar",B:"Força física",C:"Negociação e oratória"}, correta:"C"},
    { pergunta:"Como promover democracia?", opcoes:{A:"Com transparência e diálogo",B:"Nada",C:"Dormir"}, correta:"A"},
    { pergunta:"Como lidar com conflitos?", opcoes:{A:"Ignorar",B:"Com diplomacia e respeito",C:"Nada"}, correta:"B"}
],
"Diplomata": [
    { pergunta:"Função principal?", opcoes:{A:"Lutar em batalhas",B:"Dormir",C:"Negociar e manter relações externas"}, correta:"C"},
    { pergunta:"Qual habilidade essencial?", opcoes:{A:"Comunicação e persuasão",B:"Força física",C:"Cantar"}, correta:"A"},
    { pergunta:"Como evitar conflitos?", opcoes:{A:"Usando violência",B:"Com diálogo e acordos",C:"Ignorando problemas"}, correta:"B"},
    { pergunta:"Qual objetivo principal?", opcoes:{A:"Garantir paz e cooperação",B:"Gerar confusão",C:"Aumentar conflitos"}, correta:"A"},
    { pergunta:"Como representar o império?", opcoes:{A:"Com respeito e postura diplomática",B:"Com arrogância",C:"Com silêncio"}, correta:"A"}
],
"Militar - Infantaria": [
    { pergunta:"Função principal?", opcoes:{A:"Combater na linha de frente",B:"Ficar parado",C:"Escrever poemas"}, correta:"A"},
    { pergunta:"Arma mais comum?", opcoes:{A:"Laptop",B:"Rifle/Fuzil",C:"Livro"}, correta:"B"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Disciplina e resistência",B:"Cantar",C:"Dormir"}, correta:"A"},
    { pergunta:"Como apoiar a tropa?", opcoes:{A:"Seguindo ordens e mantendo posição",B:"Ignorando",C:"Fugindo"}, correta:"A"},
    { pergunta:"Qual valor é mais importante?", opcoes:{A:"Coragem",B:"Preguiça",C:"Apatia"}, correta:"A"}
],

"Militar - Estratégia": [
    { pergunta:"Função principal?", opcoes:{A:"Planejar batalhas",B:"Dormir",C:"Correr sem rumo"}, correta:"A"},
    { pergunta:"Ferramenta essencial?", opcoes:{A:"Mapas e inteligência",B:"Guitarra",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade chave?", opcoes:{A:"Cozinhar",B:"Análise e liderança",C:"Pintar"}, correta:"B"},
    { pergunta:"Como vencer batalhas?", opcoes:{A:"Com estratégia e coordenação",B:"Com sorte",C:"Com gritos"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Bagunça",B:"Preguiça",C:"Visão e planejamento"}, correta:"C"}
],

"Militar - Logística": [
    { pergunta:"Função principal?", opcoes:{A:"Garantir suprimentos e transporte",B:"Dormir",C:"Lutar sempre na frente"}, correta:"A"},
    { pergunta:"Item essencial?", opcoes:{A:"Veículos e suprimentos",B:"Violão",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade chave?", opcoes:{A:"Ignorar",B:"Organização e eficiência",C:"Fazer piada"}, correta:"B"},
    { pergunta:"Como apoiar o exército?", opcoes:{A:"Mantendo recursos disponíveis",B:"Não ajudando",C:"Se escondendo"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Desordem",B:"Preguiça",C:"Responsabilidade"}, correta:"C"}
],

"Guarda Imperial": [
    { pergunta:"Função principal?", opcoes:{A:"Dormir",B:"Fugir",C:"Proteger o imperador e o palácio"}, correta:"C"},
    { pergunta:"Qualidade essencial?", opcoes:{A:"Lealdade",B:"Preguiça",C:"Egoísmo"}, correta:"A"},
    { pergunta:"Arma comum?", opcoes:{A:"Microfone",B:"Lança ou espada cerimonial",C:"Papel"}, correta:"B"},
    { pergunta:"Como agir em ameaça?", opcoes:{A:"Proteger com disciplina e força",B:"Correr",C:"Ficar parado"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Desrespeito",B:"Honra",C:"Medo"}, correta:"B"}
],
"Polícia - Patrulha": [
    { pergunta:"Função principal?", opcoes:{A:"Manter ordem e segurança nas ruas",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Bicicleta de papelão",B:"Nada",C:"Rádio e viatura"}, correta:"C"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Vigilância e disciplina",B:"Dançar",C:"Cantar"}, correta:"A"},
    { pergunta:"Como agir diante de crimes?", opcoes:{A:"Fingir que não viu",B:"Dormir",C:"Responder rápido e com firmeza"}, correta:"C"},
    { pergunta:"Valor principal?", opcoes:{A:"Desrespeito",B:"Prontidão e coragem",C:"Preguiça"}, correta:"B"}
],

"Polícia - Investigação": [
    { pergunta:"Função principal?", opcoes:{A:"Dormir",B:"Ignorar pistas",C:"Resolver crimes com provas"}, correta:"C"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Anotações e evidências",B:"Guitarra",C:"Chave de fenda"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Raciocínio lógico e observação",B:"Cantar",C:"Ignorar"}, correta:"A"},
    { pergunta:"Como solucionar crimes?", opcoes:{A:"Com sorte",B:"Aleatório",C:"Seguindo pistas e interrogando"}, correta:"C"},
    { pergunta:"Valor principal?", opcoes:{A:"Persistência e justiça",B:"Preguiça",C:"Esquecimento"}, correta:"A"}
],

"Polícia - Operações Especiais": [
    { pergunta:"Função principal?", opcoes:{A:"Dormir",B:"Combater situações de alto risco",C:"Fugir"}, correta:"B"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Armas táticas e equipamentos",B:"Vassoura",C:"Livro"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Treinamento intenso e disciplina",B:"Dormir",C:"Dançar"}, correta:"A"},
    { pergunta:"Como agir em missões?", opcoes:{A:"Com estratégia e coragem",B:"Sem preparo",C:"Com medo"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Coragem e lealdade",B:"Preguiça",C:"Desordem"}, correta:"A"}
],
"Médico": [
    { pergunta:"Função principal?", opcoes:{A:"Tratar pacientes e salvar vidas",B:"Dormir",C:"Correr"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Estetoscópio e exames",B:"Espada",C:"Violão"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Empatia e conhecimento técnico",B:"Ignorar",C:"Pintar"}, correta:"A"},
    { pergunta:"Como lidar com emergências?", opcoes:{A:"Agir rápido e com precisão",B:"Esperar",C:"Fugir"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Compromisso com a vida",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],

"Enfermeiro": [
    { pergunta:"Função principal?", opcoes:{A:"Apoiar pacientes e médicos",B:"Dormir",C:"Cantar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Equipamentos de enfermagem",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Cuidado e atenção",B:"Desatenção",C:"Correr"}, correta:"A"},
    { pergunta:"Como apoiar o hospital?", opcoes:{A:"Seguindo protocolos e ajudando pacientes",B:"Ignorando",C:"Brincando"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Dedicação e empatia",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],

"Socorrista": [
    { pergunta:"Função principal?", opcoes:{A:"Atender emergências rápidas",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Ambulância e primeiros socorros",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Agilidade e preparo",B:"Cantar",C:"Desatenção"}, correta:"A"},
    { pergunta:"Como salvar vidas?", opcoes:{A:"Com primeiros socorros imediatos",B:"Nada",C:"Fugir"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Rapidez e responsabilidade",B:"Preguiça",C:"Medo"}, correta:"A"}
],

"Pesquisador": [
    { pergunta:"Função principal?", opcoes:{A:"Dormir",B:"Estudar e desenvolver conhecimento",C:"Ignorar"}, correta:"B"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Laboratório e livros",B:"Espada",C:"Microfone"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Observação e método científico",B:"Correr",C:"Dançar"}, correta:"A"},
    { pergunta:"Como contribuir com a ciência?", opcoes:{A:"Publicando estudos e descobertas",B:"Nada",C:"Dormir"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Curiosidade e ética",B:"Preguiça",C:"Desordem"}, correta:"A"}
],
"Combate a incêndio": [
    { pergunta:"Função principal?", opcoes:{A:"Apagar incêndios e salvar vidas",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Mangueira e equipamentos",B:"Guitarra",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Coragem e preparo físico",B:"Dormir",C:"Dançar"}, correta:"A"},
    { pergunta:"Como agir no fogo?", opcoes:{A:"Com técnica e segurança",B:"Aleatório",C:"Correr"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Heroísmo e disciplina",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],
"Resgate em desastres": [
    { pergunta:"Função principal?", opcoes:{A:"Salvar vítimas em desastres",B:"Dormir",C:"Fingir que não viu"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Equipamentos de resgate",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Trabalho em equipe e coragem",B:"Preguiça",C:"Cantar"}, correta:"A"},
    { pergunta:"Como agir em colapsos?", opcoes:{A:"Seguindo protocolos de resgate",B:"Fugindo",C:"Nada"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Solidariedade",B:"Apatia",C:"Medo"}, correta:"A"}
],
"Proteção Civil": [
    { pergunta:"Função principal?", opcoes:{A:"Prevenir e reduzir riscos",B:"Dormir",C:"Fingir que não viu"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Planos de emergência",B:"Guitarra",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Organização e prevenção",B:"Preguiça",C:"Ignorar"}, correta:"A"},
    { pergunta:"Como ajudar a população?", opcoes:{A:"Promovendo segurança e educação",B:"Dormindo",C:"Fugindo"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Responsabilidade",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],
"Empresário": [
    { pergunta:"Função principal?", opcoes:{A:"Gerir negócios e gerar empregos",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Planilhas e reuniões",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Visão estratégica",B:"Cantar",C:"Fugir"}, correta:"A"},
    { pergunta:"Como expandir negócios?", opcoes:{A:"Investindo e inovando",B:"Nada",C:"Dormir"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Liderança e inovação",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],
"Funcionário": [
    { pergunta:"Função principal?", opcoes:{A:"Executar tarefas e apoiar empresa",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Computador e ferramentas de trabalho",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Pontualidade e dedicação",B:"Preguiça",C:"Cantar"}, correta:"A"},
    { pergunta:"Como contribuir para empresa?", opcoes:{A:"Trabalhando com eficiência",B:"Fugindo",C:"Nada"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Responsabilidade",B:"Desordem",C:"Preguiça"}, correta:"A"}
],
"Produtor": [
    { pergunta:"Função principal?", opcoes:{A:"Criar bens ou serviços",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Equipamentos de produção",B:"Violão",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Criatividade e técnica",B:"Preguiça",C:"Fugir"}, correta:"A"},
    { pergunta:"Como gerar valor?", opcoes:{A:"Produzindo com qualidade",B:"Dormindo",C:"Aleatório"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Inovação e dedicação",B:"Desordem",C:"Preguiça"}, correta:"A"}
],
"Professor": [
    { pergunta:"Função principal?", opcoes:{A:"Ensinar e formar alunos",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Quadro e livros",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Paciência e didática",B:"Correr",C:"Preguiça"}, correta:"A"},
    { pergunta:"Como inspirar estudantes?", opcoes:{A:"Com bons exemplos e dedicação",B:"Dormindo",C:"Ignorando"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Educação e responsabilidade",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],
"Jornalista": [
    { pergunta:"Função principal?", opcoes:{A:"Informar a sociedade com notícias",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Microfone e reportagens",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Apuração e clareza",B:"Preguiça",C:"Dançar"}, correta:"A"},
    { pergunta:"Como transmitir confiança?", opcoes:{A:"Com ética e verdade",B:"Dormindo",C:"Fugindo"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Transparência",B:"Preguiça",C:"Desordem"}, correta:"A"}
],
"Artista": [
    { pergunta:"Função principal?", opcoes:{A:"Criar e expressar arte",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Ferramenta mais usada?", opcoes:{A:"Pincéis, instrumentos, criatividade",B:"Espada",C:"Nada"}, correta:"A"},
    { pergunta:"Habilidade essencial?", opcoes:{A:"Expressividade e imaginação",B:"Preguiça",C:"Fugir"}, correta:"A"},
    { pergunta:"Como impactar o público?", opcoes:{A:"Transmitindo emoções",B:"Dormindo",C:"Nada"}, correta:"A"},
    { pergunta:"Valor principal?", opcoes:{A:"Inspiração e cultura",B:"Preguiça",C:"Bagunça"}, correta:"A"}
],
"Líder religioso": [
    { pergunta:"Função principal?", opcoes:{A:"Orientar espiritualmente",B:"Dormir",C:"Ignorar"}, correta:"A"},
    { pergunta:"Como conduzir cerimônias?", opcoes:{A:"Rituais e ensinamentos",B:"Nada",C:"Aleatório"}, correta:"A"},
    { pergunta:"Como aconselhar fiéis?", opcoes:{A:"Com empatia e ética",B:"Nada",C:"Ignorar"}, correta:"A"},
    { pergunta:"Como promover harmonia?", opcoes:{A:"Diálogo e apoio",B:"Nada",C:"Dormir"}, correta:"A"},
    { pergunta:"Como organizar a comunidade?", opcoes:{A:"Coordenação e liderança",B:"Nada",C:"Ignorar"}, correta:"A"}
  ]
};

// 👇 exporta o objeto para ser usado no index.js
module.exports = perguntas;