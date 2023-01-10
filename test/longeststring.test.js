const { Solution } = require("../longeststring");

describe("Get longest string - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			const solution = new Solution();
			expect(solution.longestString).toBeDefined();
		});
	});

	describe("Check duplicates", () => {
		test.each`
			arr                                                         | n    | expected
			${["ab", "a", "abc", "abd"]}                                | ${4} | ${"abc"}
			${["ab", "a", "aa", "abd", "abc", "abda", "abde", "abdab"]} | ${8} | ${"abdab"}
		`(
			"longestString with $arr expect to return $expected",
			({ arr, n, expected }) => {
				const solution = new Solution();
				expect(solution.longestString(arr, n)).toEqual(expected);
			}
		);
	});
});
