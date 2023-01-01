const {
	countUniqueValues,
} = require("../count-unique");

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
