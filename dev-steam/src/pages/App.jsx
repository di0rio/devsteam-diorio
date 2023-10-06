import "./App.css";

import Header from "../components/header/header";
import Cardpromo from "../components/cardpromo/cardpromo";
import Cardgames from "../components/cardgames/cardgames";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Title">Promoção</div>

      <div className="Card">
        <Cardpromo></Cardpromo>
        <Cardpromo></Cardpromo>
        <Cardpromo></Cardpromo>

      </div>
        <div className="Title2">Outros jogos</div>
        <div className="CardCs">
        <Cardgames></Cardgames>
        {/* <Cardgames></Cardgames>
        <Cardgames></Cardgames>
        <Cardgames></Cardgames> */}
        </div>
    </div>
  );
};

export default App;
