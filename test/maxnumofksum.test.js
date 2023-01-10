const { maxOperations } = require("../maxnumofksum");

describe("Max Number of K-Sum Pairs - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(maxOperations).toBeDefined();
		});
	});

	describe("Pairs", () => {
		test.each`
			arr                                                       | k    | expected
			${[1, 2, 3, 4]}                                           | ${5} | ${2}
			${[3, 1, 3, 4, 3]}                                        | ${6} | ${1}
			${[4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4]} | ${2} | ${2}
		`(
			"maxOperations returns $expected when inspect $arr",
			({ arr, k, expected }) => {
				expect(maxOperations(arr, k)).toEqual(expected);
			}
		);
	});
});
