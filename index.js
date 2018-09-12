function takeANumber(currentLine, name) {
  for (let i = 1; i <= currentLine.length; i++) {
    if (currentLine[i] == name) {
      return `Welcome, ${name}. You are number ${i} in Line.`
    }
  }
}

function nowServing(currentLine) {
  var person = currentLine.shift();
  return person;
}