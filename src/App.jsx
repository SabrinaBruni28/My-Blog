import Background from "./components/Background";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";

function App() {
  const sites = [
    {
      name: "Perfil do GitHub",
      url: "https://github.com/SabrinaBruni28",
      img: "/assets/github.png",
    },
    {
      name: "Catout",
      url: "https://sabrinabruni28.github.io/Catout/",
      img: "/assets/catout.png",
    },
    {
      name: "MegaMania",
      url: "https://sabrinabruni28.github.io/MegaMania/",
      img: "/assets/megamania.png",
    },
    {
      name: "Jogo da Memória",
      url: "https://sabrinabruni28.github.io/JogoDaMemoria/",
      img: "/assets/jogodamemoria.png",
    },
    {
      name: "Snake Game",
      url: "https://sabrinabruni28.github.io/Snake-Game/",
      img: "/assets/snakegame.png",
    },
    {
      name: "Gerenciador de Tarefas",
      url: "https://sabrinabruni28.github.io/Gerenciador-de-Tarefas/",
      img: "/assets/gerenciadortarefas.png",
    },
    {
      name: "Caldeirão - Marketplace",
      url: "https://caldeirao.onrender.com/",
      img: "/assets/caldeirao.ico",
    },
    {
      name: "Gravity Falls - Blog",
      url: "https://sabrinabruni28.github.io/Pagina-HMTL-GravityFalls/",
      img: "/assets/gravityfalls.png",
    },
    {
      name: "Jogo da Velha",
      url: "https://github.com/SabrinaBruni28/JogoDaVelha-2.0/actions",
      img: "/assets/jogovelha.ico",
    },
    {
      name: "Campo Minado",
      url: "https://github.com/SabrinaBruni28/JogoCampoMinado-2.0/actions",
      img: "/assets/campominado.png",
    },
    {
      name: "Dinos Em Extinção - Jogo de Tabuleiro",
      url: "https://github.com/SabrinaBruni28/Dinos-em-Extincao",
      img: "/assets/dinos.jpg",
    },
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
