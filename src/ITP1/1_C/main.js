const main = (input) => {
	const inputArr = input.split(" ");
	const height = Number(inputArr[0]);
	const width = Number(inputArr[1]);

	const area = height * width;
	const length = (height + width) * 2;

	console.log(`${area} ${length}`);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
