const main = (input) => {
  const inputArr = input.split(" ");
  const a = Number(inputArr[0]);
  const b = Number(inputArr[1]);
  const c = Number(inputArr[2]);

if (a < b && b < c){
  console.log('Yes');
} else {
  console.log('No');
}

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
