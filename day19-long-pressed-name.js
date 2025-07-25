function isLongPressedName(name, typed) {
  let i = 0
  for (let j = 0; j < typed.length; j++) {
    if (i < name.length && name[i] === typed[j]) {
      i++
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false
    }
  }
  return i === name.length
}

const name = 'arijit'
const typed = 'arriijiit'
console.log(isLongPressedName(name, typed))
