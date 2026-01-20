import Background from "./components/Background";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";
import Button from "./components/Button";
import Projects from "./data/Projects";
import Img from "./components/Img";

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
          {/*GitHub*/}
          <Button
            onClick={() => window.open("https://github.com/SabrinaBruni28")}
          >
            <Img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </Button>
          {/*LinkedIn*/}
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sabrina-bruni-712aa3233/",
              )
            }
          >
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s" />
          </Button>
          {/*Instagram*/}
          <Button
            onClick={() =>
              window.open("https://www.instagram.com/sabrinabruni/")
            }
          >
            <Img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" />
          </Button>
          {/*Email*/}
          <Button
            onClick={() => window.open("mailto:sabrinabruni28@gmail.com")}
          >
            <Img src="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png" />
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
