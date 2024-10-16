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


#[wasm_bindgen]
pub fn recursive_power(array: &[i64]) -> i64 {
    if array.len() == 1 {
        return array[0]; // Caso base: só há um elemento, retorna ele.
    }

    // Pegamos o primeiro elemento e elevamos ao resultado da potenciação recursiva
    let base = array[0];
    let exponent = recursive_power(&array[1..]); // Recursão no restante do array

    // Para evitar números muito grandes, aqui fazemos a conversão para u32 do expoente
    base.pow(exponent as u32)
}





// -- -- Tests

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_process_array() {
        let input = vec![1, 2, 3, 4];
        let expected = vec![1, 2, 3, 4];
        let result = process_array(input.clone());
        println!("-- -- -- :: process_array: {:?}", result);
        assert_eq!(process_array(input), expected);
    }

    #[test]
    fn test_remove_duplicates() {
        let input = vec![1, 2, 2, 3, 4, 4, 5];
        let expected = vec![1, 2, 3, 4, 5];
        let result = remove_duplicates(input.clone());
        println!("\n-- -- -- :: remove_duplicates: {:?}", result);
        assert_eq!(remove_duplicates(input), expected);
    }

    #[test]
    fn test_is_prime() {
        // Verificando se a função auxiliar 'is_prime' está correta
        assert_eq!(is_prime(2), true);
        assert_eq!(is_prime(3), true);
        assert_eq!(is_prime(4), false);
        assert_eq!(is_prime(17), true);
        assert_eq!(is_prime(18), false);
    }

    #[test]
    fn test_filter_primes() {
        let input = vec![1, 2, 2, 3, 4, 5, 6, 7, 7, 11, 13, 17, 19];
        let expected = vec![2, 3, 5, 7, 11, 13, 17, 19];
        assert_eq!(filter_primes(input), expected);
    }

    #[test]
    fn test_recursive_power() {
        let input = vec![2, 3, 4, 5];
        let expected = 2_i64.pow(3_i64.pow(4_i64.pow(5) as u32) as u32);
        assert_eq!(recursive_power(&input), expected);

        let input2 = vec![5];
        let expected2 = 5;
        assert_eq!(recursive_power(&input2), expected2);
    }
}




// -- -- Funções auxiliares:
// Eliminar duplicados ✅



// -- -- Métodos objetivos:

// Numeros primos; ✅
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

