const main = (input) => {
  const second = parseInt(input);

  const hour = Math.floor(second / 3600);
  const min = Math.floor((second % 3600) / 60);
  const sec = second % 60;

  console.log(`${hour}:${min}:${sec}`);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
