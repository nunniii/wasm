import React, { useEffect, useState } from 'react';
import { processDuplicates, filterPrimes } from '../../wasm';
import '../../styles/components/analyzer.scss';

interface AnalyzerProps {
  dataArray: number[];
}

export const Analyzer: React.FC<AnalyzerProps> = ({ dataArray }) => {
  const [uniqueArray, setUniqueArray] = useState<number[]>([]);
  const [primeArray, setPrimeArray] = useState<number[]>([]); 

  useEffect(() => {
    const processArray = async () => {
      if (dataArray.length > 0) {
        // Processa duplicatas
        const withoutDuplicates = await processDuplicates(dataArray);
        setUniqueArray(withoutDuplicates); // Atualiza o array sem duplicatas no estado

        const primes = await filterPrimes(dataArray);
        setPrimeArray(primes); // Atualiza o array de primos no estado
      } else {
        // Limpa os arrays seguintes SE não houver dados
        setUniqueArray([]); 
        setPrimeArray([]); 
      }
    };

    processArray();
  }, [dataArray]);

  return (
    <div className='dashboard'>
      <div className='results'>

      {primeArray.length > 0 ? (
          <div>
            <p><span className='destaque'>Primes = [ </span>{primeArray.join(', ')}<span className='destaque'>]</span></p>
          </div>
        ) : (
          <p className="text-gray-500">Nenhum número primo encontrado.</p>
        )}

        {uniqueArray.length > 0 ? (
          <div>
            <p><span className='destaque'>without_duplicated_elements = [</span>{uniqueArray.join(', ')}<span className='destaque'>]</span></p>
          </div>
        ) : (
          <p className="text-gray-500">Nenhum número processado ainda.</p>
        )}
        
        
      </div>
    </div>
  );
};
