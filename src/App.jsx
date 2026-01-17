import Background from "./components/Background";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Button from "./components/Button";
import Projects from "./data/Projects";

function App() {
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
        <List list={Projects} />
      </div>
    </Background>
  );
}

export default App;
