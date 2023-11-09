/*
  1- Escreva um algoritmo para encontrar os números faltantes de um array
*/
function exercicio1() {
  function encontrarNumerosFaltantes(arr) {
    const numerosFaltantes = [];

    for (let x = 0; x < arr.length - 1; x++) {
      const diferenca = arr[x + 1] - arr[x];
      if (diferenca > 1) {
        for (let y = 1; y < diferenca; y++) {
          numerosFaltantes.push(arr[x] + y);
        }
      }
    }

    return numerosFaltantes;
  }

  const arrayOriginal = [1, 2, 3, 6, 7, 8];
  const numerosFaltantes = encontrarNumerosFaltantes(arrayOriginal);

  console.log("Array original: " + arrayOriginal);
  console.log("Números faltantes" + numerosFaltantes);
  alert(
    "Os números faltantes do array " +
      arrayOriginal +
      " são: " +
      numerosFaltantes
  );
}
/* 
  2- Ecreva um algoritmo para encontrar três números consecutivos de um array que somados o resultado é igual a zero:
*/
function exercicio2() {
  function encontrarTresConsecutivosComSomaZero(arr) {
    for (let x = 0; x < arr.length - 2; x++) {
      let n1 = arr[x];
      let n2 = arr[x + 1];
      let n3 = arr[x + 2];

      if (n1 + n2 + n3 === 0) {
        return [n1, n2, n3];
      }
    }

    return "Não foi possível encontrar três números consecutivos com soma zero.";
  }

  const array2 = [-1, 0, 1, 2, -1, -4];
  const resultado2 = encontrarTresConsecutivosComSomaZero(array2);
  alert("Três números consecutivos com soma igual a zero: " + resultado2);
  console.log("Três números consecutivos com soma igual a zero: ", resultado2);
}
/*
  3- Escreva um algoritmo para encontrar três números consecutivos de um array que somados o resultado é igual um outro número fornecido:
*/

function exercicio3() {
  function encontrarSomaComNumFornecido(arr, targetSum) {
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
      let num1 = arr[i];
      let num2 = arr[i + 1];
      let num3 = arr[i + 2];

      if (num1 + num2 + num3 === targetSum) {
        result.push([num1, num2, num3]);
      }
    }

    return result;
  }

  const array3 = [2, 7, 7, 1, 8, 2, 7, 8, 7];
  const num_fornecido = 16;
  const resultado3 = encontrarSomaComNumFornecido(array3, num_fornecido);

  alert(
    "Três números consecutivos com soma igual a " +
      num_fornecido +
      ": " +
      resultado3
  );
  console.log(
    "Três números consecutivos com soma igual a ",
    num_fornecido,
    ": ",
    resultado3
  );
}
/*
  4- Escreva um algoritmo para encontrar um único número de um array que não se repita duas vezes:
*/
function exercicio4() {
  function encontrarNaoRepete(arr) {
    const numCount = {};

    for (let i = 0; i < arr.length; i++) {
      if (numCount[arr[i]] === undefined) {
        numCount[arr[i]] = 1;
      } else {
        numCount[arr[i]]++;
      }
    }

    let numNaoRepete;

    for (const [key, value] of Object.entries(numCount)) {
      if (value === 1) {
        numNaoRepete = key;
        break;
      }
    }

    return numNaoRepete;
  }

  const array4 = [5, 3, 4, 3, 4];
  const numNaoRepete = encontrarNaoRepete(array4);
  console.log("Array:", array4);
  console.log("Número que não se repete:", numNaoRepete);
  alert("O número " + numNaoRepete + " não se repete no array " + array4);
}

/*
  5- Escreva um algoritmo para encontrar um único número de um array onde cada número repete três vezes, exceto um:
*/

function exercicio5() {
  function encontrarNaoRepete2(arr) {
    const countMap = new Map();

    for (const num of arr) {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }
    }

    for (const [num, count] of countMap.entries()) {
      if (count === 1) {
        return num;
      }
    }
  }

  const array5 = [5, 3, 4, 3, 5, 5, 3];
  const numNaoRepete2 = encontrarNaoRepete2(array5);

  console.log("Input:", array5);
  console.log("Número que não se repete:", numNaoRepete2);
  alert(
    "O único número que não se repete dentro do array " +
      array5 +
      " é o " +
      numNaoRepete2
  );
}

/*
  6- Escreva um algoritmo que receba um numero e que apartir deste numero construa um array com a sequencia fibonacci e com o numero de elementos sendo o informado:
*/
function exercicio6() {
  function sequenciaFibonacci(num) {
    let sequenciaFibonacci = [1, 1];

    for (let i = 2; i < num; i++) {
      sequenciaFibonacci[i] =
        sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
    }

    return sequenciaFibonacci.slice(0, num);
  }

  const numFibonacci = 6;
  const result = sequenciaFibonacci(numFibonacci);
  console.log(
    "Com base no número ",
    numFibonacci,
    " a sequência ficará: ",
    result
  );
  alert(
    "Com base no número " + numFibonacci + " a sequência ficará: " + result
  );
}
