// const {} = require("../graph-directed-1");
const { depthHasPath, breadthHasPath } = require("../graph-directed-2");

const graphObj = {
	f: ["g", "i"],
	g: ["h"],
	i: ["k", "g"],
	j: ["i"],
	k: [],
	h: [],
};

const graphObj1 = {
	a: ["b", "d"],
	d: ["e"],
	e: ["k"],
	b: ["g"],
	g: ["i", "f"],
	f: ["j"],
	j: ["h"],
	c: ["f", "t", "k"],
	h:[],
	k:[],
	i:[],
	t:[]
}

describe("Depth Has Path - Graph", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(depthHasPath).toBeDefined();
			expect(breadthHasPath).toBeDefined();
		});
	});

	describe("Check power", () => {
		it("Unit test depth has path", () => {
			expect(depthHasPath(graphObj, "f", "k")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "i")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "h")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "g")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "j")).toEqual(false);

			expect(depthHasPath(graphObj1, "b", "c")).toEqual(false);
			expect(depthHasPath(graphObj1, "a", "h")).toEqual(true);
			expect(depthHasPath(graphObj1, "a", "c")).toEqual(false);
		})

		it("Unit test breadth has path", () => {
			expect(breadthHasPath(graphObj, "f", "k")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "i")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "h")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "g")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "j")).toEqual(false);

			expect(breadthHasPath(graphObj1, "b", "c")).toEqual(false);
			expect(breadthHasPath(graphObj1, "a", "h")).toEqual(true);
			expect(breadthHasPath(graphObj1, "a", "c")).toEqual(false);

		});
	});
});
