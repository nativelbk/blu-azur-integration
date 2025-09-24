import "./App.css";
import Activites from "./components/Activity/Activites";
import Contact from "./components/Contact/Contact";
import Discover from "./components/Discover/Discover";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Localisation from "./components/Localisation/Localisation";
import PrivateAppartment from "./components/PrivateAppartment/PrivateAppartment";
import Reservation from "./components/Reservation/Reservation";

function App() {
  return (
    <>
      <Header />
      <PrivateAppartment />
      <Activites />
      <Localisation />
      <Discover />
      <Experiences />
      <Reservation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
