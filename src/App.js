import React, {useState} from 'react';
import './App.css';


import Desafio from './components/Desafio';
import Numero from './components/Numero';
import Propriedades from './components/Propriedades';
import Sorteio from './components/Sorteio';
import Recesso from './components/Recesso';



function App() {
  const [num, setNum] = useState(0);
  
  return (
    <div className="App">
      <h1>Projeto React-Redux</h1>

      <div>
        <Desafio></Desafio>
      </div>

      <div>
        <Numero num={num}  onMinChanged = {setNum} ></Numero>
      </div>

      <div>
        <Propriedades texto='Qual a sua nota' aluno='Pamela' nota={num}> </Propriedades>
      </div>

      <div>
        <Sorteio num = {num}>  </Sorteio>
      </div>

      <div> 
        <Recesso num= {num}>  </Recesso>
      </div>

    </div>
  );
}

export default App;