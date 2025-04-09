import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors", () => {
  it("should return 1 if player1 wins", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  it("should return 2 if player2 wins", () => {
    expect(play("rock", "paper")).toBe(2);
  });

  it("should return 0 if it's a draw", () => {
    expect(play("rock", "rock")).toBe(0);
  });

  it("should throw an error for invalid moves", () => {
    expect(() => play("rock", "invalid")).toThrowError(
      "Invalid move. Valid moves are: rock, paper, scissors."
    );
    expect(() => play("invalid", "rock")).toThrowError(
      "Invalid move. Valid moves are: rock, paper, scissors."
    );
  });
});
