
import init, { greet } from '../wasm/pkg/wasm';

export async function runWasm(): Promise<string> {
  await init();  // Inicializa o WebAssembly
  const greeting = greet('WebAssembly com Vite e React');  // Chama a função `greet` e pega o retorno
  return greeting;  // Retorna a string
}
