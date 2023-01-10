const { removeDuplicates } = require("../remove-duplicates");

describe("Remove Duplicates(LeetCode 26) - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(removeDuplicates).toBeDefined();
		});
	});

	describe("Check duplicates", () => {
		test.each`
			arr                               | expected
			${[1, 1, 2]}                      | ${[1, 2]}
			${[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]} | ${[0, 1, 2, 3, 4]}
		`(
			"removeDuplicates returns $expected when inspect $arr with $target",
			({ arr, expected }) => {
				expect(removeDuplicates(arr)).toEqual(expected);
			}
		);
	});
});
