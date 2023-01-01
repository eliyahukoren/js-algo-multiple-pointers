const {
	areThereDuplicates,
	areThereDuplicatesOneLiner,
	countUniqueValues,
	sumZero,
	averagePair,
	isSubsequence,
	isSubsequenceV2,
} = require("../index");

describe("Are There Duplicates - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(areThereDuplicates).toBeDefined();
		});
	});

	describe("Unit tests", () => {
		const data = [
			["1, 2, 3", true, [1, 2, 2]],
			// ['"a", "b", "c", "a"', true, ["a", "b", "c", "a"]],
			["1, 2, 3", false, [1, 2, 3]],
			['"a", "b", "c", "d"', false, ["a", "b", "c", "d"]],
		];

		test.each(data)(
			"areThereDuplicates( %s ), should return %s",
			(desc, expected, given) => {
				expect(areThereDuplicates(...given)).toEqual(expected);
			}
		);
	});
});

describe("Are There Duplicates - One Liner", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(areThereDuplicatesOneLiner).toBeDefined();
		});
	});

	describe("Unit tests", () => {
		const data = [
			["1, 2, 3", true, [1, 2, 2]],
			['"a", "b", "c", "a"', true, ["a", "b", "c", "a"]],
			["1, 2, 3", false, [1, 2, 3]],
			['"a", "b", "c", "d"', false, ["a", "b", "c", "d"]],
		];

		test.each(data)(
			"areThereDuplicatesOneLiner( %s ), should return %s",
			(desc, expected, given) => {
				expect(areThereDuplicatesOneLiner(...given)).toEqual(expected);
			}
		);
	});
});

describe("Count Unique Values - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(countUniqueValues).toBeDefined();
		});
	});

	describe("Unique Values", () => {
		const table = [
			[[1, 1, 1, 1, 1, 2], 2],
			[[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7],
			[[-2, -1, -1, 0, 1], 4],
			[[], 0],
		];

		test.each(table)(
			"With %j countUniqueValues returns %i",
			(arr, expected) => {
				expect(countUniqueValues(arr)).toEqual(expected);
			}
		);

		test.each`
			arr          | expected
			${[1, 2, 3]} | ${3}
			${[2, 2, 3]} | ${2}
		`("Returns $expected when inspect $arr", ({ arr, expected }) => {
			expect(countUniqueValues(arr)).toEqual(expected);
		});
	});
});

describe("Sum Zero - Multiple Pointers", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(sumZero).toBeDefined();
		});
	});

	describe("Zero pairs", () => {
		test.each`
			arr                            | expected
			${[-3, -2, -1, 0, 1, 2, 3]}    | ${[-3, 3]}
			${[-3, -2, -1, 0, 1, 2, 3, 5]} | ${[-3, 3]}
			${[-3, -2, -1, 0, 1, 2, 3, 2]} | ${[-2, 2]}
			${[-2, 0, 1, 3]}               | ${undefined}
			${[1, 2, 3, 4]}                | ${undefined}
		`(
			"sumZero returns $expected when inspect $arr",
			({ arr, expected }) => {
				expect(sumZero(arr)).toEqual(expected);
			}
		);
	});
});

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
