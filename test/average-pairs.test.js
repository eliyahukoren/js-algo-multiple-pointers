const { averagePair } = require("../average-pairs");

describe("Average Pairs - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(averagePair).toBeDefined();
		});
	});

	describe("Average pairs", () => {
		test.each`
			arr                               | target | expected
			${[1, 2, 3]}                      | ${2.5} | ${true}
			${[1, 3, 3, 5, 6, 7, 10, 12, 19]} | ${8}   | ${true}
			${[-1, 0, 3, 4, 5, 6]}            | ${4.1} | ${false}
			${[]}                             | ${4}   | ${false}
		`(
			"averagePair returns $expected when inspect $arr with $target",
			({ arr, target, expected }) => {
				expect(averagePair(arr, target)).toEqual(expected);
			}
		);
	});
});
