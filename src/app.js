import './tailwind.css'
import React from 'react';
import Accordion from './components/accordion';
import ButtonRounded from './components/buttonRounded';


const App = () => {
  return (
    <div>
      <Accordion>Accordion content</Accordion>
      <ButtonRounded>Botón</ButtonRounded>
    </div>
  )
}

export default App;