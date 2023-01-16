const { closestNumber, closestNumberTwoArrays } = require("../closestnumber");

describe("Closest Number - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(closestNumber).toBeDefined();
		});
	});

	describe("Closest Number", () => {
		test.each`
			arr                         | n     | expected
			${[10, 22, 28, 29, 30, 40]} | ${54} | ${[22, 30]}
			${[1, 3, 4, 7, 10]}         | ${15} | ${[4, 10]}
		`(
			"closestNumber returns $expected when inspect $arr with $n",
			({ arr, n, expected }) => {
				expect(closestNumber(arr, n)).toEqual(
					expect.arrayContaining(expected)
				);
			}
		);
	});
});

describe("Closest Number 2 Arrays - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(closestNumberTwoArrays).toBeDefined();
		});
	});

	describe("Closest Number", () => {
		test.each`
			arr1            | arr2                | n     | expected
			${[1, 4, 5, 7]} | ${[10, 20, 30, 40]} | ${32} | ${[1, 30]}
			${[1, 4, 5, 7]} | ${[10, 20, 30, 40]} | ${50} | ${[7, 40]}
		`(
			"closestNumberTwoArrays returns $expected when inspect $arr1, $arr2 with $n",
			({ arr1, arr2, n, expected }) => {
				expect(closestNumberTwoArrays(arr1, arr2, n)).toEqual(
					expect.arrayContaining(expected)
				);
			}
		);
	});
});
