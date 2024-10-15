use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn process_array(array: Vec<i64>) -> Vec<i64> {

    let mut result_array: Vec<i64> = Vec::new();

    for num in array.iter() {
        let processed_value = * num; 
        result_array.push(processed_value); 
    }

    result_array // Retorna o array processado
}




#[wasm_bindgen]
pub fn remove_duplicates(array: Vec<i64>) -> Vec<i64> {
    let mut result_array: Vec<i64> = Vec::new(); // Array de resultado

    for &num in array.iter() {
        // Verificar se o número já está presente no array de resultados
        if !result_array.contains(&num) {
            result_array.push(num); // Se não estiver, adicionar ao array de resultados
        }
    }

    result_array // Retorna o array processado sem duplicados
}

// -- -- is prime
// Função auxiliar para verificar se um número é primo
fn is_prime(num: i64) -> bool {
    if num < 2 {
        return false;
    }
    for i in 2..=((num as f64).sqrt() as i64) {
        if num % i == 0 {
            return false; 
        }
    }
    true 
}

#[wasm_bindgen]
pub fn filter_primes(mut array: Vec<i64>) -> Vec<i64> {
    let mut result_array: Vec<i64> = Vec::new();
    array = remove_duplicates(array);
    for &num in array.iter() {
        // Eliminar números negativos
        if num < 0 {
            continue;
        }
        if is_prime(num) {
            result_array.push(num);
        }
    }
    result_array 
}






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

