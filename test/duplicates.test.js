const {
	areThereDuplicates,
	areThereDuplicatesOneLiner,
} = require("../duplicates");


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
