import { formatDuration } from "./duration";

describe("format seconds", () => {
    it("should format 0 seconds as '0s'", () => {
        expect(formatDuration(0)).toBe("0s");
    });
    
    it("should format 1 second as '1s'", () => {
        expect(formatDuration(1)).toBe("1s");
    });
    
    it("should format 59 seconds as '59s'", () => {
        expect(formatDuration(59)).toBe("59s");
    });
    
    it("should format 60 seconds as '1m'", () => {
        expect(formatDuration(60)).toBe("1m");
    });
    
    it("should format 61 seconds as '1m1s'", () => {
        expect(formatDuration(61)).toBe("1m1s");
    });
    
    it("should format 3600 seconds as '1h'", () => {
        expect(formatDuration(3600)).toBe("1h");
    });
    
    it("should format 3661 seconds as '1h1m1s'", () => {
        expect(formatDuration(3661)).toBe("1h1m1s");
    });
    
    it("should format negative durations as an error", () => {
        expect(() => formatDuration(-1)).toThrowError(
        "Negative durations are not allowed."
        );
    });
});