let number = 0;
let i = 0

while (number <= 1000) { 
    console.log(${number} = ${number} + ${i});
    number = number + i;
    i++;

  if (number == 100){
      break;
  }
}
  