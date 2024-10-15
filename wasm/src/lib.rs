use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}


#[wasm_bindgen]
pub fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }
    for i in 2..=((n as f64).sqrt() as u32) {
        if n % i == 0 {
            return false;
        }
    }
    true
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

