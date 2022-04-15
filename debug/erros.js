function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("envie os parametros");
    
    if (typeof arr !== "object")
      throw new TypeError("array precisa ser object");
    
      if (typeof num !== "number")
      throw new TypeError("num precisa ser number");
    
      if (arr.length !== num) throw new RangeError("tamanho invalido");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("esse erro é um reference error");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("esse erro é um type error");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("esse erro é um range error");
      console.log(e.message);
    } else{
      console.log("tipo de erro não esperado: "+ e)
    }
  }
}

console.log(validaArray());
console.log(validaArray(5,5));
console.log(validaArray([],'a'));
console.log(validaArray([],5));
console.log(validaArray([1,2,3,4,5],5))
