import Background from "./components/Background";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const sites = [
    {
      name: "Catout",
      urls: [
        { name: "GitHub", url: "https://github.com/SabrinaBruni28/Catout" },
        { name: "Web", url: "https://sabrinabruni28.github.io/Catout/" },
      ],
      img: "/assets/catout.png",
    },
    {
      name: "MegaMania",
      urls: [
        { name: "GitHub", url: "https://github.com/SabrinaBruni28/MegaMania" },
        { name: "Web", url: "https://sabrinabruni28.github.io/MegaMania/" },
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
      ],
      img: "/assets/jogodamemoria.png",
    },
    {
      name: "Snake Game",
      urls: [
        { name: "GitHub", url: "https://github.com/SabrinaBruni28/Snake-Game" },
        { name: "Web", url: "https://sabrinabruni28.github.io/Snake-Game/" },
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
          url: "https://github.com/SabrinaBruni28/Pagina-HMTL-GravityFalls",
        },
        {
          name: "Web",
          url: "https://sabrinabruni28.github.io/Pagina-HMTL-GravityFalls/",
        },
      ],
      img: "/assets/gravityfalls.png",
    },
    {
      name: "Jogo da Velha",
      urls: [
        {
          name: "GitHub",
          url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0",
        },
        {
          name: "Download",
          url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/actions",
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
          name: "Download",
          url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/actions",
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
      name: "Guitarrio 2600 - Jogo de Atari",
      urls: [
        {name: "GitHub", url: "https://github.com/SabrinaBruni28/Guitarriro-2600"},
      ],
      img: "/assets/guitarriro.webp",
    }
  ];
  return (
    <Background>
      <div className="space-y-6 p-6 bg-stone-400 rounded-md shadow justify-center">
        <Title>Welcome to My Blog</Title>
        <img
          src={import.meta.env.BASE_URL + "/sabrina.jpg"}
          alt="Sabrina Bruni"
          className="w-45 h-40 rounded-full mx-auto border-4 border-slate-300"
        />
        <div className="justify-center p-6 flex gap-4 flex-wrap">
          <Button
            onClick={() => window.open("https://github.com/SabrinaBruni28")}
          >
            GitHub
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sabrina-bruni-712aa3233/"
              )
            }
          >
            LinkedIn
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.instagram.com/sabrinabruni/")
            }
          >
            Instagram
          </Button>
          <Button
            onClick={() => window.open("mailto:sabrinabruni28@gmail.com")}
          >
            Email
          </Button>
        </div>
        <Paragraph>
          My name is Sabrina Bruni. I'm graduated in Computer Science. This is a
          blog where I share all my projects that I publish somewhere.
        </Paragraph>
      </div>
      <div>
        <List list={sites} />
      </div>
    </Background>
  );
}

export default App;
