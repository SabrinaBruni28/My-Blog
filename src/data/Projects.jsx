const projects = [
  {
    name: "Catout",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/Catout" },
      { name: "Web", url: "https://sabrinabruni28.github.io/Catout/" },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/Catout/releases/latest/download/Catout-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/Catout/releases/latest/download/Catout-Windows.exe",
      },
    ],
    img: "/assets/catout.png",
  },
  {
    name: "MegaMania",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/MegaMania" },
      { name: "Web", url: "https://sabrinabruni28.github.io/MegaMania/" },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/MegaMania/releases/latest/download/MegaMania-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/MegaMania/releases/latest/download/MegaMania-Windows.exe",
      },
    ],
    img: "/assets/megamania.png",
  },
  {
    name: "Jogo da Memória",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoDaMemoria",
      },
      { name: "Web", url: "https://sabrinabruni28.github.io/JogoDaMemoria/" },
      {
        name: "Download (Jar)",
        url: "https://github.com/SabrinaBruni28/JogoDaMemoria/releases/latest/download/MemoriaGame-1.0.0.jar",
      },
    ],
    img: "/assets/jogodamemoria.png",
  },
  {
    name: "Snake Game",
    urls: [
      { name: "GitHub", url: "https://github.com/SabrinaBruni28/Snake-Game" },
      { name: "Web", url: "https://sabrinabruni28.github.io/Snake-Game/" },
      {
        name: "Download (Jar)",
        url: "https://github.com/SabrinaBruni28/Snake-Game/releases/latest/download/SnakeGame-1.0.0.jar",
      },
    ],
    img: "/assets/snakegame.png",
  },
  {
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
    name: "Movies Platform",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/Movies-Platform",
      },
      {
        name: "Web",
        url: "https://sabrinabruni28.github.io/Movies-Platform/",
      },
    ],
    img: "/assets/moviesplatform.png",
  },
  {
    name: "Jogo da Velha",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0",
      },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/latest/download/JogoDaVelha-Linux.tar.gz",
      },
      {
        name: "Dowload (Windows)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/latest/download/JogoDaVelha-Windows.exe",
      },
      {
        name: "Download (MacOS)",
        url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/releases/latest/download/JogoDaVelha-macOS.tar.gz",
      },
    ],
    img: "/assets/jogovelha.ico",
  },
  {
    name: "Campo Minado",
    urls: [
      {
        name: "GitHub",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0",
      },
      {
        name: "Download (Linux)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/latest/download/CampoMinado-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/latest/download/CampoMinado-Windows.exe",
      },
      {
        name: "Download (MacOS)",
        url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/releases/latest/download/CampoMinado-macOS.tar.gz",
      },
    ],
    img: "/assets/campominado.png",
  },
  {
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
        url: "https://github.com/SabrinaBruni28/Cavaleiro/releases/latest/download/Cavaleiro-Linux.tar.gz",
      },
      {
        name: "Download (Windows)",
        url: "https://github.com/SabrinaBruni28/Cavaleiro/releases/latest/download/Cavaleiro-Windows.exe",
      },
    ],
    img: "/assets/cavaleiro.png",
  },
].map((project, index) => ({
  ...project,
  id: index + 1,
}));

export default projects;
