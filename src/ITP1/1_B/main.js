const main = (input) => {
	console.log(input * input * input);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
