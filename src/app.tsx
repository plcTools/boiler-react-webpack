import "./tailwind.css";
import React from "react";
import Accordion from "./components/accordion";
import ButtonRounded from "./components/buttonRounded";

const App = () => {
  return (
    <div>
      <Accordion>
        <ButtonRounded>Botón</ButtonRounded>
      </Accordion>
    </div>
  );
};

export default App;
