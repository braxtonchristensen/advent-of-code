import { fileToInput } from "../utils";
const checkPasswords = async () => {
  const lines = await fileToInput();

  let valid = 0;
  for (let i = 0; i < lines.length; i++) {
    let [, lowStr, highStr, char, password] = [
      ...lines[i].matchAll(/(\d+)-(\d+) (.): (.+)/g),
    ][0];
    const low = Number(lowStr);
    const high = Number(highStr);

    // Part 1
    const count = (password.match(new RegExp(char, "g")) || []).length;
    if (low <= count && count <= high) {
      valid += 1;
    }

    // Part 2
    // if (
    //   Number(password[low - 1] === char) +
    //     Number(password[high - 1] === char) ===
    //   1
    // ) {
    //   valid += 1;
    // }
  }

  console.log(valid);
};

checkPasswords();
