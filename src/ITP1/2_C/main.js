const main = (input) => {
  const inputArr = input.split(" ");
  const a = Number(inputArr[0]);
  const b = Number(inputArr[1]);
  const c = Number(inputArr[2]);

  if (a <= b &&  b <= c){
    console.log(a + " " + b + " " + c);
  } else if (a <= c && c <= b){
    console.log(a + " " + c + " " + b);
  } else if (b <= a && a <= c){
    console.log(b + " " + a + " " + c);
  } else if (b <= c && c <= a){
    console.log(b + " " + c + " " + a);
  } else if (c <= a && a <= b){
    console.log(c + " " + a + " " + b);
  } else if (c <= b && b <= a){
    console.log(c + " " + b + " " + a);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
