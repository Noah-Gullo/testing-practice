import {capitalize, reverseString} from "./index.js"

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