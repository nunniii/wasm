import React, { useState, useEffect } from 'react'; // Importando useEffect
import { initWasm } from './wasm';
import { Nav } from './components/Nav'
import Editor from './components/Editor';
import {Analyzer} from './components/analyzers/Analyzer'; // Importando o novo componente

import { D3Chart } from './components/D3Chart';

import './styles/app.scss';

const App: React.FC = () => {
  const [dataArray, setDataArray] = useState<number[]>([]); // Para armazenar o array de números

  // Inicializa o wasm assim que o componente carrega
  useEffect(() => {
    initWasm();
  }, []); // useEffect deve ter um array de dependências

  return (
    <div id="App">
      <Nav />

      <div className='app'>
        <div className='flex'>
          <Editor setDataArray={setDataArray} />
          <D3Chart dataArray={dataArray} />

        </div>
        
        {/* Chamando o componente Analyzer e passando o dataArray */}
        <Analyzer dataArray={dataArray} />

        
      </div>
    </div>
  );
};

export default App;
