/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let strSmall = str.toLowerCase(),
      target = 'в',
      targetSmall = target.toLowerCase(),
      counter = 0;

  if (!str) return str;

  for (let char of strSmall) {
    if (char.indexOf(targetSmall) != -1) {
      counter++;
      console.log(counter);
    }
  }
  if (counter == 1) {
    return (str[0].toUpperCase() + str.slice(1));
  }
}
