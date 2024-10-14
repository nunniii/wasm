import init, { is_prime } from '../wasm/pkg/wasm';

// Inicializa o WebAssembly
export async function initWasm(): Promise<void> {
  await init(); // Inicializa o Wasm
}




export async function checkPrime(n: number): Promise<boolean> {
  const result = is_prime(n); // Chama a função Rust `is_prime`
  return result;
}
