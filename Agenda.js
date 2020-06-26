class Pessoa{
    constructor(nome, sobrenome, CPF, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.CPF = CPF
        this.idade = idade
    }

    get NomeCompleto(){
        return this.nome + " " + this.sobrenome
    }

    get _CPF(){
        return this.CPF
    }
}

class Filho extends Pessoa{
    constructor(nome, sobrenome, CPF, idade, CPFMae, CPFPai){
        super(nome, sobrenome, CPF, idade)
        this.CPFMae = CPFMae
        this.CPFPai = CPFPai
    }

    get _CPFMae(){
        return this.CPFMae
    }

}
var pessoas = []

function addPessoa(pessoa){
    for(i in pessoas){
        if(pessoa._CPF==pessoas[i]._CPF){
         return console.log('CPF já existente, tente novamente')
            }
       }

    if(pessoa instanceof Filho){
        for(i in pessoas){
            if(pessoa.CPFMae==pessoas[i]._CPF){
                pessoas.push(pessoa)
                return console.log('Filho adicionado')
            }
        }
        return console.log('Mãe não existente, tente novamente')
    }

    pessoas.push(pessoa)
    console.log('Pessoa adicionada')
    }
  
function RemoverPessoa(CPF){

    for(i in pessoas){
        if(pessoas[i]._CPF==CPF){
            console.log(`${pessoas[i].nome} foi removida junto com seus filhos com sucesso`)
            pessoas.splice(i, 1)
            return
        }
    }
   return console.log('CPF inexistente, tente novamente')
}

var Luccas = new Pessoa('luccas', 'ribeiro', 22, 26)
var milena = new Pessoa('Milena', 'nascime', 29, 28)
var igor = new Filho('igor', 'ribeiro', 11, 26, 29)
var maria = new Filho('Maria', 'ribeiro', 89, 12, 29)
var joao = new Filho('joao', 'costa', 49, 22, 29)
var marcus = new Filho('marcus', 'ribeiro', 27, 23, 29, 22)

addPessoa(Luccas)
addPessoa(milena)
addPessoa(igor)
addPessoa(maria)
addPessoa(marcus)
addPessoa(joao)

console.log(pessoas)
RemoverPessoa(29)
console.log(pessoas)







