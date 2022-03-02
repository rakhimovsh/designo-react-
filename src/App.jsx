import "./App.scss";
import "./Components/Container/Container.scss";
import "./Fonts.scss";
import "./Components/Buttons/Btn.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
