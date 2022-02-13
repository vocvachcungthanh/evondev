import React from "react";
import "./App.css";
import Game from "./components/tictactoe/Game.component";
import Toggle from "./components/toggle/Toggle.component";
function App() {
  const [view, setView] = React.useState(false);
  return (
    <div className="App">
      <Toggle handleChange={(e) => setView(e)}></Toggle>
      {view && <Game />}
    </div>
  );
}

export default App;
