import "./App.css";
import Employees from "./components/Employees/Employees";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Offers from "./components/Offers/Offers";

function App() {
  return (
    <>
      <Header></Header>
      <LandingPage></LandingPage>
      <Employees></Employees>
      <Offers></Offers>
      <Footer></Footer>
    </>
  );
}

export default App;
