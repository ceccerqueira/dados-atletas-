//Criando a classe
class Atleta{
  //Criando o construtor da classe Atleta
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas
    
  }


//Criando o método construtor para calcular as categorias
  calculaCategoria(){


    if(this.idade > 8 && this.idade <= 11){
       return "Infatil"
    }
    else if(this.idade >= 12 && this.idade <= 13){
      return "Juvenil"
    }
    else if(this.idade >= 14 && this.idade <= 15){
      return "Intermediário"
    }
    else if(this.idade >= 16 && this.idade <= 30){
      return "Adulto"
    }
    else if(this.idade > 30){
      return "Sem categoria"
    }
  }


//Método para calcular o IMC do atleta
  calculaIMC(){
    return this.peso / (this.altura * this.altura)
  }


//Método para calcular a média das notas do atleta
  calculaMediaValida(){
    let notasOrdenadas = this.notas.sort((a, b) => a - b);


    //Remove a menor e a maior nota (pega índices 1 a 3)
    let notasParaCalcularMedia = notasOrdenadas.slice(1, 4);


    //Criando 3 variáveis para calcular a média das 3 notas de cada atleta
    let notasMedia = notasParaCalcularMedia.length;
    let soma = 0;
    let media = 0;


    //Calcula a média das 3 notas de cada atleta
    notasParaCalcularMedia.forEach(function (numero) {
      soma = soma + numero
     
    })
     return media = soma / notasMedia


  }


//Método exibir o nome e do atleta
  obtemNomeAtleta(){
    return `Nome: ${this.nome}`
  }


//Método exibir a idade do atleta
  obtemIdadeAtleta(){
     return `Idade: ${this.idade}`
  }


//Método exibir o peso do atleta
  obtemPesoAtleta(){
    return `Peso: ${this.peso}`
  }


//Método exibir a altura do atleta
  obtemAlturaAtleta(){
    return `Altura: ${this.altura}`
  }


//Método exibir as notas do atleta
  obtemNotasAtleta(){
    return `Notas: ${this.notas}`
  }


//Método para exibir a categoria do atleta
  obtemCategoria(){
    return `Categoria: ${atleta.calculaCategoria()}`
  }


//Método para exibir o IMC 
  obtemIMC(){
    return `IMC: ${atleta.calculaIMC()}`
  }


//Método para exibir a média das notas do atleta
  obtemMediaValida(){
    return `Média válida: ${atleta.calculaMediaValida()}`
  }


}


//Dados de entrada
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);




console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
