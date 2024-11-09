// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar baseado no tipo do herói
    atacar() {
      let ataque;
  
      // Verificando o tipo de herói e definindo o ataque correspondente
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'fez um ataque desconhecido';
      }
  
      // Exibindo a mensagem do ataque
      console.log(`${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Testando a classe com diferentes tipos de heróis
  const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  heroi1.atacar(); // Saída: guerreiro atacou usando espada
  
  const heroi2 = new Heroi('Merlin', 70, 'mago');
  heroi2.atacar(); // Saída: mago atacou usando magia
  
  const heroi3 = new Heroi('Kenshin', 25, 'ninja');
  heroi3.atacar(); // Saída: ninja atacou usando shuriken
  
  const heroi4 = new Heroi('Liu Kang', 35, 'monge');
  heroi4.atacar(); // Saída: monge atacou usando artes marciais
  