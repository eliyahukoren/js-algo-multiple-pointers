const {
	sumZero,
} = require("../zerosum");

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
