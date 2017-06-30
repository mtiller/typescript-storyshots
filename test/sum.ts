test("Simple sum", () => {
    expect(3 + 5).toBe(8);
})

test("Snapshot sum", () => {
    // I'm too lazy to figure out what this should equal...
    expect(3492 + 2593).toMatchSnapshot();
})