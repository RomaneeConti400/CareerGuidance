import { customAlphabet } from "nanoid";

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const length = 21;

const nanoid = customAlphabet(alphabet, length);

export function generatePublicId() {
  return nanoid();
}