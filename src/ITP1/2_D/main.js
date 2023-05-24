const main = (input) => {
  const inputArr = input.split(" ");
  const W = Number(inputArr[0]);
  const H = Number(inputArr[1]);
  const x = Number(inputArr[2]);
  const y = Number(inputArr[3]);
  const r = Number(inputArr[4]);

  if (0 <= x - r && x + r <= W && 0 <= y - r && y + r <= H){
    console.log('Yes');
  } else {
    console.log('No');
  }

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
