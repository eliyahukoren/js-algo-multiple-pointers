const { isSubsequence, isSubsequenceV2 } = require("../subsequence");

describe("Is Subsequence - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(isSubsequence).toBeDefined();
		});
	});

	describe("Average pairs", () => {
		test.each`
			str        | target            | expected
			${"hello"} | ${"hello world!"} | ${true}
			${"sing"}  | ${"sting"}        | ${true}
			${"abc"}   | ${"abracadabra"}  | ${true}
			${"abc"}   | ${"acb"}          | ${false}
		`(
			"isSubsequence returns $expected, because '$str' subsequence in '$target'",
			({ str, target, expected }) => {
				expect(isSubsequence(str, target)).toEqual(expected);
				expect(isSubsequenceV2(str, target)).toEqual(expected);
			}
		);
	});
});
