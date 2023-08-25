// variaveis

let local = 10;

const imutavel = 10;

// funcoes 

function soma(a,b){
    return a + b;
}
console.log(soma(2,3));

// arrow function 
const soma2 = (a,b) => a + b;

console.log(soma2(4,5));

// arrays 
const frutas = [];
frutas.push("uva", "acai");
frutas.push(...["uva", "acai"]);// propagacao 
console.log(frutas);

frutas.forEach(fruta => console.log(fruta));
const achou = frutas.find((fruta) => fruta === "uva");
console.log(achou);

// objetos

const pessoa = {id:1, nome: "Jose", sexo: "M"};
console.log(pessoa.nome);
const {nome, sexo} = pessoa;
console.log(nome, sexo);

// modulos

export default frutas;
export {achou, soma}

import frutas from 'revisao.js' // com js 
import {achou} from 'revisao'   // sem js



//

const App = () => {
    return (
        <View>
            <Text>Olá Mundo</Text>
        </View>
    );
}

