import { test, describe, expect } from "vitest";
import { superStatus } from "../index.js";

//Test all superstatus test cases
describe("Function superStatus() tests", () => {
  test('Name Super Louis returns "Superhero"', () => {
    expect(superStatus("Super Louis")).toBe("Superhero");
  });
  test('Name Ira returns "Special Agent"', () => {
    expect(superStatus("Ira")).toBe("Special Agent");
  });
});
