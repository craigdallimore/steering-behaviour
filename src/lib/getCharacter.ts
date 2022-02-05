import { Character, CharacterId, CharacterMap } from "@domain/types";

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
