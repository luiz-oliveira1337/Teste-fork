
import { describe, expect, it } from "vitest";
import { sum } from "./index";

    describe("sum", () => {
        it("should add two numbers", () => {
            expect(sum(2, 3)).toBe(5);
        });
    });
