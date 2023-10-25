/**
 * O formato JSON (javaScript Object Notation - Notação de Objetos JavaScript) é, como o nome sugere, 
 * uma forma de notação de objetos Javascript, de modo que ele possam ser 
 * representados de uma forma comum a diversas linguagens.
 * 
 * JSON é uma coleção de pares chave/valor, em que cada chave é uma string e o valor pode 
 * ser um número, uma string, um booleano, um objeto, um array ou null. Isso o torna um formato 
 * de dados muito flexível e amplamente utilizado na web, em particular para a comunicação entre 
 * aplicativos web e servidores, bem como para a configuração de aplicativos e armazenamento de dados.
 * 
 * Porque é tão utilizado o JSON:
 * - simplicidade
 * -legibilidade
 * -portabilidade
 * -suporte amblo
 * -integração web infinita
 * 
 * ------regras de utilização:
 * - não pode ter funções
 * -não pode ter comentário
 * -todo texto tem que estar entre "aspas"
 * -as propriedades tamb´wm em "aspas"
 * 
 * sintax:
 * {
 *  "propriedade" ; "valor"
 * }
 */

// exemplo em XML:

<user>
    <id>11</id>
    <animal>Bob</animal>
    <idade>2</idade>
</user>


//Transformado em JSON - ver o exemplo abaixo no arquivo "dados.json"

/**
 
{
    "user": {
      "id": "11",
      "animal": "Bob",
      "idade": "2"
    }
  }

 */
