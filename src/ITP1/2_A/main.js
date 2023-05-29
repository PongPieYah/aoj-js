const main = (input) => {
  const inputArr = input.split(" ");
  const a = Number(inputArr[0]);
  const b = Number(inputArr[1]);

  if (a < b) {
    console.log('a < b');
  } else if (a > b) {
    console.log('a > b');
  } else { 
    console.log('a == b');
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));