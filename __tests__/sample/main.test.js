// テストフラグを立てる
isTest = true;
const main = require("../../src/sample/main");

// 単一のテストケースを実行する場合の記述例
describe("単一テストケース: 与えられた整数を 3 乗して返す。", () => {
  test("'2' が与えられると、'8' を返す。", () => {
    expect(main("2")).toBe("8");
  });
});

// 複数のテストケースを実行する場合の記述例
describe("複数テストケース: 与えられた整数を 3 乗して返す。", () => {
  test.each([
    ["2", "8"], // '2' を引数として渡すと '8' が返される
    ["3", "27"], // '3' を引数として渡すと '27' が返される
  ])("'%s' が与えられると、'%s' を返す。", (input, expected) => {
    expect(main(input)).toBe(expected);
  });
});
