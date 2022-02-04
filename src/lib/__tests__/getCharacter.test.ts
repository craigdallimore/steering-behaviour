import Character from "@domain/character";
import getCharacter from "../getCharacter";

describe("getCharacter", () => {
  it("returns null, given no character id", () => {
    const char = new Character();
    const characterMap = new Map([["id_1", char]]);
    expect(getCharacter(null, characterMap)).toBe(null);
  });
  it("returns null, given no character matching the id", () => {
    const char = new Character();
    const characterMap = new Map([["id_1", char]]);
    expect(getCharacter("id_2", characterMap)).toBe(null);
  });
  it("returns the character, given it can be looked up by id", () => {
    const char = new Character();
    const characterMap = new Map([["id_1", char]]);
    expect(getCharacter("id_1", characterMap)).toBe(char);
  });
});
