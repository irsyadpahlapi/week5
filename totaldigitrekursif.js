function totalDigitRekursif(angka) {
  let huruf = String(angka)
  if(angka===0){
    return angka
  }else{
    return Number(huruf[0]) + totalDigitRekursif(Number(huruf.slice(1)))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
