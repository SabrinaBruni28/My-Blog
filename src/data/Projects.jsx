const projects = [
  {
    id: 1,
    name: "Catout",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/Catout" },
      { name: "Web", url: "https://sabrinabruni28.github.io/Catout/" },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/Catout/releases/download/v16/Catout-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/Catout/releases/download/v16/Catout-Windows.exe",
      },
    ],
    img: "/assets/catout.png",
  },
  {
    id: 2,
    name: "MegaMania",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/MegaMania" },
      { name: "Web", url: "https://sabrinabruni28.github.io/MegaMania/" },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/MegaMania/releases/download/v15/MegaMania-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/MegaMania/releases/download/v15/MegaMania-Windows.exe",
      },
    ],
    img: "/assets/megamania.png",
  },
  {
    id: 3,
    name: "Jogo da Memória",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoDaMemoria",
      },
      { name: "Web", url: "https://sabrinabruni28.github.io/JogoDaMemoria/" },
      {
        name: "Download (Jar)",
        url: "https://github.com/SabrinaBruni28/JogoDaMemoria/releases/download/v10/MemoriaGame-1.0.0.jar",
      },
    ],
    img: "/assets/jogodamemoria.png",
  },
  {
    id: 4,
    name: "Snake Game",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/Snake-Game" },
      { name: "Web", url: "https://sabrinabruni28.github.io/Snake-Game/" },
      {
        name: "Download (Jar)",
        url: "https://github.com/SabrinaBruni28/Snake-Game/releases/download/v23/SnakeGame-1.0.0.jar",
      },
    ],
    img: "/assets/snakegame.png",
  },
  {
    id: 5,
    name: "Gerenciador de Tarefas",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Gerenciador-de-Tarefas",
      },
      {
        name: "Web",
        url: "https://sabrinabruni28.github.io/Gerenciador-de-Tarefas/",
      },
    ],
    img: "/assets/gerenciadortarefas.png",
  },
  {
    id: 6,
    name: "Caldeirão - Marketplace",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Caldeirao-Marketplace-Web",
      },
      { name: "Web", url: "https://caldeirao.onrender.com/" },
    ],
    img: "/assets/caldeirao.ico",
  },
  {
    id: 7,
    name: "Gravity Falls - Blog",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/GravityFalls",
      },
      {
        name: "Web",
        url: "https://sabrinabruni28.github.io/GravityFalls/",
      },
    ],
    img: "/assets/gravityfalls.png",
  },
  {
    id: 8,
    name: "Jogo da Velha",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0",
      },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/download/v17/JogoDaVelha-Linux.tar.gz",
      },
      {
        name: "Dowload (Windows)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/download/v17/JogoDaVelha-Windows.exe",
      },
      {
        name: "Download (MacOS)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/download/v17/JogoDaVelha-macOS.tar.gz",
      },
    ],
    img: "/assets/jogovelha.ico",
  },
  {
    id: 9,
    name: "Campo Minado",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0",
      },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/download/v22/CampoMinado-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/download/v22/CampoMinado-Windows.exe",
      },
      {
        name: "Download (MacOS)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/download/v22/CampoMinado-macOS.tar.gz",
      },
    ],
    img: "/assets/campominado.png",
  },
  {
    id: 10,
    name: "Dinos Em Extinção - Jogo de Tabuleiro",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Dinos-em-Extincao",
      },
    ],
    img: "/assets/dinos.webp",
  },
  {
    id: 11,
    name: "Guitarriro 2600 - Jogo de Atari",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Guitarriro-2600",
      },
    ],
    img: "/assets/guitarriro.webp",
  },
  {
    id: 12,
    name: "Desafio Digital",
    urls: [
      {
        name: "Web",
        url: "http://tomcat.nupessc.caf.ufv.br/desafiodigital/",
      },
      {
        name: "Download (Jar)",
        url: "https://drive.google.com/uc?export=download&id=117cbm5pGrfY1L1hG3LIUAQxJsVQujqRS",
      },
      {
        name: "Download (Android)",
        url: "https://drive.google.com/uc?export=download&id=1lmNKNXU8T7_sdVn0EhywOd4F0v2PS8-M",
      },
    ],
    img: "/assets/desafiodigital.png",
  },
  {
    id: 13,
    name: "Jogo da Forca",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoDaForca-2.0",
      },
      {
        name: "Web",
        url: "https://sabrinabruni28.github.io/JogoDaForca-2.0/",
      },
    ],
    img: "/assets/forca.png",
  },
  {
    id: 14,
    name: "Cavaleiro da Floresta",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Cavaleiro",
      },
      {
        name: "Web",
        url: "https://sabrinabruni28.github.io/Cavaleiro/",
      },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/Cavaleiro/releases/download/v3/Cavaleiro-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/Cavaleiro/releases//download/v3/Cavaleiro-Windows.exe",
      },
    ],
    img: "/assets/cavaleiro.png",
  },
];

export default projects;
