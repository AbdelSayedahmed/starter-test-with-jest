const { getFullName, getProductsPurchased } = require("../src/products");

describe("getFullName()", () => {
  it("It should return an object of names of a person.", () => {
    const input = { names: { first: "Chelsea", surname: "Hernandez" } };
    const actual = getFullName(input);
    const expected = "Chelsea Hernandez";
    expect(actual).toEqual(expected);
  });
});

describe("getProductsPurchased()", () => {
  it("It should return 'No products purchased.' if no products are purchased", () => {
    const input = { purchased: [] };
    const actual = getProductsPurchased(input);
    expect(actual).toEqual("No products purchased.");
  });
});
