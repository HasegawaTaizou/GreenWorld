export default function onlyLetters(input) {
  input = input.replace(/[^a-zA-Z]/g, "");
  return input;
}
