const main = (input) => {
  const inputArr = input.split(" ");
  const a = Number(inputArr[0]);
  const b = Number(inputArr[1]);
  const c = Number(inputArr[2]);

  const NumArr = [a,b,c];
  NumArr.sort((a, b) => a - b);
  console.log(NumArr.join(" "))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
