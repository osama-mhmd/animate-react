import { test, expect } from "vitest";
import animate from "../src";

test("Testing index.ts", () => {
  expect(animate()).toEqual(1);
});
