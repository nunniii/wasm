import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/Editor.scss';

interface EditorProps {
  setDataArray: (data: number[]) => void; // Função para passar o array para o App
}

const Editor: React.FC<EditorProps> = ({ setDataArray }) => {
  const initialCode = `{
    3, 2, 5, 7, 3, (3e3 2e3 2e4 3e3)
    
    [7, 5.6, 7.86, (
        8e3 7e3 {
            5e2 3e2
        } (5, 8, 9, [21, 32, 43] 4 2.54)
    )]
  }`;

  const [code, setCode] = useState<string>(initialCode);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [showEntries, setShowEntries] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setDataArray(parseInputToArray(code)); // Passa o array atualizado para o App
  }, [code, setDataArray]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const currentLineNumber = e.currentTarget.value
      .substr(0, e.currentTarget.selectionStart)
      .split('\n').length - 1;
    setCurrentLine(currentLineNumber);

    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.currentTarget;
      const newCode =
        code.substring(0, selectionStart) +
        '    ' +
        code.substring(selectionEnd);
      setCode(newCode);
      setTimeout(() => {
        if (textAreaRef.current) {
          textAreaRef.current.selectionStart = selectionStart + 4;
          textAreaRef.current.selectionEnd = selectionStart + 4;
        }
      }, 0);
    }
  };

  const parseInputToArray = (input: string): number[] => {
    const cleanedInput = input
      .replace(/[\[\]{}()]/g, '')
      .replace(/\n/g, ' ')
      .split(/[\s,]+/)
      .map(item => {
        const num = parseFloat(item);
        return isNaN(num) ? null : num;
      })
      .filter((num): num is number => num !== null);
    return cleanedInput;
  };

  const lineCount = code.split('\n').length;
  const isArrayValid = parseInputToArray(code).length > 0;
  const alertMessage = `Foi esperado um array, foi obtido: ${JSON.stringify(
    parseInputToArray(code)
  )}`;
  const parsedArray = parseInputToArray(code);

  return (
    <div className="editor-layout">
      <div className="editor-container">
        <div className="line-numbers">
          {[...Array(lineCount)].map((_, index) => (
            <div
              key={index}
              className={`line-number ${
                currentLine === index ? 'current-line' : ''
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="editor">
          <textarea
            ref={textAreaRef}
            value={code}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="textarea"
            rows={lineCount}
            placeholder={`{
  3, 2, 5, 7, 3, (3e3 2e3 2e4 3e3)
  
  [7, 5.6, 7.86, (
      8e3 7e3 {
          5e2 3e2
      } (5, 8, 9, [21, 32, 43] 4 2.54)
  )]
}
`}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={showEntries}
              onChange={() => setShowEntries(!showEntries)}
            />
            Exibir entradas
          </label>
        </div>
        <div className={`data-display ${isArrayValid ? '' : 'error'} ${showEntries ? 'show' : 'hide'}`}>
          <h2>Entradas:</h2>
          {isArrayValid ? (
            <div className="entries">
              {parsedArray.map((item, index) => (
                <div
                  key={index}
                  className="entry-item bg-zinc-500 rounded-md p-1 mb-1 text-white text-[10pt]"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <pre className="output-code">{alertMessage}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
