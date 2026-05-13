import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index.js"

test("Normal capitilization", () =>{
    expect(capitalize("test")).toMatch("Test");
    expect(capitalize("another")).toMatch("Another");
});

test("Already capitalized", () => {
    expect(capitalize("Already")).toMatch("Already");
    expect(capitalize("Crest")).toMatch("Crest");
})

test("Multiple words", () => {
    expect(capitalize("the quick brown fox jumped over the lazy dog")).toMatch("The quick brown fox jumped over the lazy dog");
    expect(capitalize("this is another sentence")).toMatch("This is another sentence");
})

test("Char that can't be capitalized", () => {
    expect(capitalize("12345")).toMatch("12345");
    expect(capitalize("#")).toMatch("#");
})

test("Normal reversed string", () => {
    expect(reverseString("browntabbycat")).toMatch("tacybbatnworb");
    expect(reverseString("qwerty")).toMatch("ytrewq");
})

test("String with spaces", () => {
    expect(reverseString("This is a test")).toMatch("tset a si sihT");
    expect(reverseString("A  B c   D eF g")).toMatch("g Fe D   c B  A");
})

test("Empty string", () => {
    expect(reverseString("")).toMatch("");
})

test("Add", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(9, 12)).toEqual(21);
    expect(calculator.add(-1, 4)).toEqual(3);
    expect(calculator.add(-3, 3)).toEqual(0);
    expect(calculator.add(0.5, 0.2)).toEqual(0.7);
    expect(calculator.add(-50, 25)).toEqual(-25);
    expect(calculator.add(-0.2, 0.1)).toEqual(-0.1);
})

test("Subtract", () => {
    expect(calculator.subtract(1, 2)).toEqual(-1);
    expect(calculator.subtract(9, 12)).toEqual(-3);
    expect(calculator.subtract(-2, -5)).toEqual(3);
    expect(calculator.subtract(-1, 4)).toEqual(-5);
    expect(calculator.subtract(3, 3)).toEqual(0);
    expect(calculator.subtract(0.5, 0.2)).toBeCloseTo(0.3);
    expect(calculator.subtract(50, 25)).toEqual(25);
    expect(calculator.subtract(-0.2, 0.1)).toBeCloseTo(-0.3);
})

test("Multiply", () => {
    expect(calculator.multiply(1, 2)).toEqual(2);
    expect(calculator.multiply(3, 5)).toEqual(15);
    expect(calculator.multiply(7, 9)).toEqual(63);
    expect(calculator.multiply(12, 11)).toEqual(132);
    expect(calculator.multiply(-5, 5)).toEqual(-25);
    expect(calculator.multiply(-2, -3)).toEqual(6);
    expect(calculator.multiply(0.5, 5)).toBeCloseTo(2.5);
    expect(calculator.multiply(-0.25, 4)).toBeCloseTo(-1);
})

test("Divide", () => {
    expect(calculator.divide(1, 4)).toBeCloseTo(0.25);
    expect(calculator.divide(2, 10)).toBeCloseTo(0.2);
    expect(calculator.divide(100, 10)).toBeCloseTo(10);
    expect(calculator.divide(64, 8)).toBeCloseTo(8);
    expect(calculator.divide(-1, 4)).toBeCloseTo(-0.25);
    expect(calculator.divide(-64, 8)).toBeCloseTo(-8);
})

test("Shift by 1", () => {
    expect(caesarCipher("a", 1)).toMatch("b");
    expect(caesarCipher("z", 1)).toMatch("a");
})

test("Multiple letters", () => {
    expect(caesarCipher("Tom", 1)).toMatch("Upn");
    expect(caesarCipher("XYZ", 1)).toMatch("YZA");
})

test("Keeps uppercase/lowercase", () => {
    expect(caesarCipher("AgCNd", 3)).toMatch("DjFQg");
})

test("Punctuation", () => {
    expect(caesarCipher("This has punctuation!", 3)).toMatch("Wklv kdv sxqfwxdwlrq!");
    expect(caesarCipher("This. also. has. punctuation.", 5)).toMatch("Ymnx. fqxt. mfx. uzshyzfynts.");
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
})


test("Analyze array", () => {
    const arr = [1, 2, 3, 5, 4];
    const arr2 = [100, 200, 100];
    const arr3 = [-5, 0, 5, 2];

    expect(analyzeArray(arr).average()).toBe(3);
    expect(analyzeArray(arr).min()).toBe(1);
    expect(analyzeArray(arr).max()).toBe(5);
    expect(analyzeArray(arr).length()).toBe(5);

    expect(analyzeArray(arr2).average()).toBeCloseTo(133.33333333333333333333334);
    expect(analyzeArray(arr2).min()).toBe(100);
    expect(analyzeArray(arr2).max()).toBe(200);
    expect(analyzeArray(arr2).length()).toBe(3);

    expect(analyzeArray(arr3).average()).toBe(0.5);
    expect(analyzeArray(arr3).min()).toBe(-5);
    expect(analyzeArray(arr3).max()).toBe(5);
    expect(analyzeArray(arr3).length()).toBe(4);
})