import React, { useEffect, useState } from 'react';
import { runWasm } from './wasm';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Inicializando o Wasm e atualizando a mensagem
    runWasm().then((msg: string) => setMessage(msg));  // Aqui garantimos que a mensagem é uma string
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
};

export default App;
