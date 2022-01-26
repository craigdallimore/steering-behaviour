import { Character, CharacterId, CharacterMap } from "@domain/types.js";

export default function (
  id: CharacterId | null,
  characters: CharacterMap
): Character | null {
  if (!id) {
    return null;
  }
  const char = characters.get(id);
  return char || null;
}
