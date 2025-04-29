// let variavel = 10
// let numero:number = 10;
// let string:string = "Isso é uma string..."
// const boleano = true //false
// const vetor:number[] = [10]
// let vetorString:string[] = []

//vetor(10,20) //não pode no const, porque está modificando o vetor, trocando o valor

//Adicionar valor ao vetor de número
// vetor.push() //apenas adiciona valor ao vetor já existente, não troca nada
// vetorString.push("^-^")
// console.log(vetor)

// let nomeMateria:string = "Frameworks I"
// console.log(nomeMateria)

//Objetos em javascript
// const objEstudante = {
//     nome: "Hello moto",
//     situação: "...",
//     numero: 73,
// }
// objEstudante.numero = 1001001
// console.log(objEstudante)

//Crie um vetor com doi objetos de Estudantes(nome,cpf,idade)
//mostre no console.log

//------Minha Tentativa-------
// const vetorObj2Estudantes = {
//     nome1: "João",
//     cpf1: "111.111.111-11",
//     idade1: "11",
//     nome2: "Maria",
//     cpf2: "222.222.222-22",
//     idade2: 22,
// }

// const vetor2Estudantes = Object.entries(vetorObj2Estudantes)//
// console.log(vetor2Estudantes)

//-----Resolução do Professor------
// const vetor2ObjEstudantes = [{
//     nome1: "João",
//     cpf1: "111.111.111-11",
//     idade1: "11",
// },{
//     nome2: "Maria",
//     cpf2: "222.222.222-22",
//     idade2: 22,
// }]

// console.log(vetor2ObjEstudantes)

// //Type
// type PessoaType = {
//     nome: string;
//     idade: number;
// }
// const objPessoa:PessoaType = { 
//     nome: "Tere",
//     idade: 30
// }

// // Com | podemos colocar mais de um tipo para a mesma variável
// type TypeMaisDeUmTipo = {nome:string|number}
// const objComMaisDeUmTipo:TypeMaisDeUmTipo = {
//     nome: "Guilherme"
// }

//Com isso podemos colocar uma propriedade de um objeto
//com mais de um tipo de dados

//Agora passamos para funções
//Enquanto não ficarem quietos eu continuo por aqui
//Funções em Javascript acredito que vocês já viram

// function soma12 (a,b){
//     return a+b;
// }

// // console.log(soma(20,10))
// const resultado = (soma12(20,10))
// console.log(`O resultado da soma é: ${resultado}`)

//4 outras formas de escrever a função
// function somaA(a:number,b:number):number{
//     return a+b
// }

// const somaB = function (a:number,b:number):number|undefined{
//     return a+b
// }

// const somaC = (a:number,b:number):number[]=>{
//     return [a+b]
// }

// const somaD = (a:number,b:number):number=>a+b;

// //isso...
// const v = [1,2,3,4,5]
// function f(x){
//     if(x==5){
//         return true
//     }
//     else {
//         return false
//     }
// }
// //é igual a isso...
// v.find((x)=>x==5)
// v.pop()

//crie uma função que receba um vetor e some 
// os números do vetor
// somaNumero([1,2,3,4,5]) 
//deve devolver 10
//quando o vetor passado for vazio, devolve undefined

// = -> atribuição
//== -> igualdade
//=== -> igualdade de valor e tipo

// function somaNumeros(x:number[]):number|undefined {
//     let soma=0
//      for (let i = 0; i < x.length; i++) {
//         soma = soma + x[i];
//      }
//      if (x.length == 0) {
//         return undefined
//      }
//      else {
//         return soma
//      }
// }

// console.log(somaNumeros1([1,2,3,4]))

// //usando o while
// function somaNumeros1(x:number[]):number|undefined {
//     let soma1=0
//     let i = 0
//     while (i < x.length){
//         soma1 = soma1 + x[i];
//         i++
//     }
//      if (x.length == 0) {
//         return undefined
//      }
//      else {
//         return soma1
//      }
// }

// console.log(somaNumeros1([1,2,3,4]))

//crie uma função que receba um vetor e um número
//sua função deve somar as posições do vetor elevado ao número recebido por parâmetro
//exemplo
//somaElevado([1,2,3],2)==36
//se o vetor for vazio devolva undefined
//math.pow(2,2) ou 2**2

// function somaElevado(vetor:number[],numb:number):number|undefined{
//     if (vetor.length == 0){
//         return undefined
//     }
//     let elevacao = 0
//     for (let i=0; i < vetor.length; i++){
//         elevacao = elevacao + vetor[i] ** numb
//     }
//     return elevacao
// }

// console.log(somaElevado([1,2,3],3))


//Faça uma função que receba dois números e devolva um vetor
//da sequencia dos números 
//ex seq(10,15) // [10,11,12,13,14,15]
//ex seq(10,5) // [10,9,8,7,6,5]
//ex seq(10,10) // [10]

// function sequencia(começo: number, fim: number): number[] {
//      if (começo === fim) {
//          let vetor = new Array
//          vetor.push(começo)
//          return vetor;
//      } 
//      if (começo < fim) {
//          let vetor = new Array
//          for (let i = começo; i <= fim; i++){
//              vetor.push(i)
//          }
//          return vetor;
//      } else {
//          let vetor = new Array
//          for (let i = começo; i >= fim; i--){
//              vetor.push(i)
//          }
//          return vetor;
//      }
//     }
//  console.log(sequencia(20, 20))


// AULA 29/03
// TRÊS TIPOS DE FUNÇÃO  
// MAP
// FILTER
// FIND
// map é uma função de vetor
// ela serve para transformar o vetor em outra coisa
//callback - chama funções
// function olaMundo(){
//     console.log("Olá Mundo!")
// }
//  function chamaOlaMundo(f:()=>void){
//     f()
//  }
//  chamaOlaMundo(olaMundo)

// const vetor:number[] = [1,2,3,4,5]
 
// const result = vetor.map(
//     (x:number)=> x+2)
// console.log(result)

//atividade
//crie uma função que receba um vetor 
// e devolva um vetor onde cada elemento
// do novo vetor é uma soma do valor antigo 
//mais o número 2
// EX soma2([1,1,1,3]) // [3,3,3,5]

// function soma2(vetor:number[]){
//     return vetor.map((x)=>x+2)
// }

// console.log(soma2([2,2,2,3]))

// //faça uma função que receba um vetor e devolva
// //esse vetor elevado ao cubo

// //ex eleva([1,2,3]) // [1,8,24]
// function eleva(vetor:number[]){
//     return vetor.map((x)=> x ** 3)
// }

// console.log(eleva([1,2,3]))

/**
 * Também são funções de vetores
 * .find -> Procurar
 * .filter -> Filtrar
 */

// const vetor = [1,2,3,4,5]
// function predicado (valorBuscado){
//     if (valorBuscado < 6){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(vetor.find(predicado)) //devolve apenas o primeiro resultado verdadeiro
// console.log(vetor.filter(predicado)) // devolve todos os resultados verdadeiros



//--------------------------------🆕 conteúdo 👍--------------------------------//

/**
 * Assincronidade -> caracteristica também do js de você 
 * não executar as linhas de código em sequência 
 * setTimeout() // função que passa callback que é executada após passar o tempo
 * - primeiro executa tudo e depois passa com um callback chamando isso que ficou pra trás, não pausa a execução de outras funções
 */

//Promises
// function demora(){
//     const pro = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return "Dados!"
//         },1000) //em milissegundos
//     })
//     return pro
// }
// console.log("Início de código.")
// console.log(demora())
// console.log("Executei CONSOLE 2.")

/**
 * Promises // promessa que algo vai ser executado, é uma classe que vai criar um objeto chamado promise, quando executar vai voltar "resolve"(executou) ou "reject"(ñ executou) 
 * Then // função de callback que é executado quando termina a função de promise /catch // não quebra o terminal quando promise devolve "reject"
 */ 

// function demora(){
//     const pro = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (Math.random()<0.5){
//                 resolve("Dados!")
//             } else {
//                 reject("Não funciona")
//             }
//         },1000) //em milissegundos
//     })
//     return pro
// }
// console.log("Início de código.")

// const resultado = demora();
// resultado
// .then((dados)=>{console.log("Resultado + Promessa: "+dados)})
// .catch((erro)=>{console.log(erro)})

// console.log("Executei CONSOLE 2.")

// /** 
//  * await/async
//  */

// /**
//  * Novo js trouxe esse novo conceito de await e async
//  * await -> é para ficar esperando algo que é assincrono (async)
//  * espera a mensagem terminar e quando termina dá o resultado que vai ter nela
//  * 
//  * Não podemos usar await sem ser em uma função assincrona (async)
//  */

// async function aux(){
//     try {
//         const resultado = await demora()
//         console.log("Dados após o await: "+resultado)
//     }
//     catch(erro){
//         console.log("erro no TRY/CATCH: "+erro)
//     }
// }

// aux()

// const access: ConnectionOptions = {
//     host: "localhost",
//     user: 'root',
//     password: "",
//     database: 'banco1023b',
//     port: 3306,
// };

// const conn = mysql.createConnection(access);
// conn.then((conn:Connection)=>{
//     console.log("Conectou no banco :)")

//     conn.query("SELECT * FROM aprovados")
//     .then(query=>{
//         // const resultado = query[0]
//         // const estruturaTabela = query[1]
//         const [ resultado, estruturaTabela ] = query
//         console.log(resultado)
//         // console.log(estruturaTabela)
//     })
//     .catch((erro)=>{
//         if(erro.code==="ER_NO_SUCH_TABLE"){
//             console.log("Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
//         } else if (erro.code === "ER_PARSE_ERROR"){
//             console.log("Você digitou errado sua query, confira.")
//         }
//         else {
//             console.log(erro)
//         }
// })

//     conn.end()
//     .then(()=>console.log("Finalizei a conexão"))
//     .catch(()=>console.log("Não finalizei a conexão"))
//     // .finally(()=>console.log("Não importa se executou o THEN ou CATCH, vou executar o FINALLY"))
// })
// .catch(erro=>{
//     console.log("Não conectou :(")
    
//     if(erro.code==="ECONNREFUSED"){
//         console.log("ERRO. LIGUE O LARAGON.")
//     }else if(erro.code === "ER_BAD_DB_ERROR"){
//         console.log("ERRO: CONFIRA O NOME OU CRIE UM COM O NOME DA CONEXÃO")
//     }else if(erro.code === "ER_ACCESS_DENIED_ERROR"){
//         console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
//     }else{
//         console.log(erro)
//     }
// })

//     conn
//     .then((conn:Connection)=>{
//         console.log("Conectou no banco")
    
//         conn.query("SELECT * FROM estudantes")
//         .then(query=>{
//             // const resultado = query[0]
//             // const estruturaTabela = query[1]
//             const [resultado,estruturaTabela] = query
//             console.log(resultado)
//             reply.send(resultado)
//         })
//         .catch((erro)=>{
//             if(erro.code==="ER_NO_SUCH_TABLE"){
//                 console.log("ERRO: Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
//             }else if(erro.code==="ER_PARSE_ERROR"){
//                 console.log("ERRO: VOCÊ DIGITOU SUA QUERY DE FORMA ERRADA. CONFIRA OS PARENTESES, VIRGULAS E NOME DAS COLUNAS")
//             }
//             else{
//                 console.log(erro)
//             }
//         })
    
//         conn.end()
//         .then(()=>console.log("Finalizei a conexão"))
//         .catch(()=>console.log("Não Finalizei a conexão"))
//         //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
//     })
//     .catch(erro=>{
//         console.log("Não conectou :(")
//         if(erro.code==="ECONNREFUSED"){
//             console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
//         }else if(erro.code==="ER_BAD_DB_ERROR"){
//             console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
//         }else if(erro.code==="ER_ACCESS_DENIED_ERROR"){
//             console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
//         }else{
//             console.log(erro)
//         }
//     })
    
// })