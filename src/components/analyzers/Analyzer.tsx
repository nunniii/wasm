import React, { useEffect, useState } from 'react';
import { checkPrime } from '../../wasm';

import '../../styles/components/analyzer.scss'

interface AnalyzerProps {
  dataArray: number[];
}

export const Analyzer: React.FC<AnalyzerProps> = ({ dataArray }) => {
  const [primeResults, setPrimeResults] = useState<{ number: number; isPrime: boolean }[]>([]);

  useEffect(() => {
    const processArray = async () => {
      const results = [];
      for (const number of dataArray) {
        const isPrime = await checkPrime(number);
        results.push({ number, isPrime });
      }
      setPrimeResults(results); // Atualiza os resultados no estado
    };

    if (dataArray.length > 0) {
      processArray();
    }
  }, [dataArray]); // Dependência no dataArray para processar quando mudar

  return (
    <div className='dashboard'>
      <div className='results'>
        {primeResults.length > 0 ? (
          <ul>
            {primeResults.map((result) => (
              <li key={result.number}>
                {result.number} é {result.isPrime ? '' : 'não '}primo
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Nenhum número verificado ainda.</p>
        )}
      </div>
    </div>
  );
};


// -- -- Funções auxiliares:
// Eliminar duplicados



// -- -- Métodos objetivos:

// Numeros primos;
// Soma (todos);
// Produto (//);
// Potenciação recursiva x.index()^x.index()+1;
// Potenciação recursiva por 1/2;
// mmc
// mdc 
// Contagem de Ocorrências: Retorna um objeto que indica a frequência que cada elemento aparece no array;
// Valor max e vamor min (lim) --> retornar "lim = (<vl.min.>, <vl.max>)"
// retornar os elementos do array em ordem Decrescente;
//     //     ///    //   //  //  //   //  Crescente;
// Média
// Moda
