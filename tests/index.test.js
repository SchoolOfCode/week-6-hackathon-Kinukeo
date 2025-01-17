import { test, describe, expect } from "vitest";
import { superStatus } from "../index.js";

//Test all superstatus test cases
describe("Function superStatus() tests", () => {
  test("Name Super Louis returns Superhero", () => {
    expect(superStatus("Super Louis")).toBe("Superhero");
  });
  test("Name Ira returns Special agent", () => {
    expect(superStatus("Ira")).toBe("Special agent");
  });
  test("Name Ash Ketchum returns Not super enough", () => {
    expect(superStatus("Ash Ketchum")).toBe("Not super enough");
  });
  test("Name L33t g4mer returns error", () => {
    expect(() => superStatus("L33t g4mer")).toThrowError(
      "Invalid character found"
    );
  });
  test("Name Super Nadeem returns Special agent", () => {
    expect(superStatus("Super Nadeem")).toBe("Special agent");
  });
});
