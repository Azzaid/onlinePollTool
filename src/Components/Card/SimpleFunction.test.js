const concatenateFunction = (a, b) => {
    return "" + a + b;
}

describe("test of some function", () => {
    test("it concatenate 2 strings", () => {
        expect(concatenateFunction("foo", "bar")).toBe("foobar")
    })

    test("it concatenate 2 numbers", () => {
        expect(concatenateFunction(1, 2)).toBe("12")
    })
})