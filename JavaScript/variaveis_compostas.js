let num = [2, 3, 1];
num[3] = 6;
num.push(7);
// num.sort();
num.sort();
console.log(num);
console.log(`O vetor é ${num}`);

console.log(`O vetor tem ${num.length} posições`);

let pos = num.indexOf(3);

if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`O valor está na posição ${pos}`);
}

/*
for (let c = 0; c < num.length; c++) {
  console.log(num[c]);
}

let c = 0;

do {
  console.log(num[c]);
  c++;
} while (c < num.length);

for (let pos in num) {
  num.sort();
  console.log(num[pos]);
}
*/
