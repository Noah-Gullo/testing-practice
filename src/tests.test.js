import { experiments } from "webpack";
import {capitalize, reverseString, calculator} from "./index.js"

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