import "./App.scss";
import "./Components/Container/Container.scss";
import "./Fonts.scss";
import "./Components/Buttons/Btn.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Designes from "./Components/Design/Designes";
import Services from "./Components/Services/Services";
import YourProject from "./Components/YourProject/YourProject";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Designes />
        <Services />
        <YourProject />
      </main>
      <Footer />
    </>
  );
}

export default App;
