import React, { useState } from 'react';
import { initWasm, checkPrime } from './wasm';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [primeCheck, setPrimeCheck] = useState<string>('');

  // inicializa o wasm assim que o componente carrega
  useState(() => {
    initWasm();
  }, []);

  // Função para verificar se o número é primo
  const handleCheckPrime = async () => {
    const isPrime = await checkPrime(inputValue);
    setPrimeCheck(isPrime ? `${inputValue} é primo` : `${inputValue} não é primo`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">Verificador de Número Primo com WebAssembly</h1>

      {/* Input para o usuário inserir um número */}
      <div className="flex space-x-2">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <button
          onClick={handleCheckPrime}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Verificar se é Primo
        </button>
      </div>

      {/* Exibe o resultado da verificação */}
      {primeCheck && <p className="mt-4">{primeCheck}</p>}
    </div>
  );
};

export default App;
