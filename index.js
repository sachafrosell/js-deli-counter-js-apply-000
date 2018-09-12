function takeANumber(currentLine, name) {
  for (let i = 1; i <= currentLine.length; i++) {
    if (currentLine[i] == name) {
      return `Welcome, ${name}. You are number ${i} in Line.`;
    }
  }
}

function nowServing(currentLine) {
  if (currentLine.length > 0) {
  var person = currentLine.shift();
  return person;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentLine) {
  var strOfName = '';
  if (currentLine.length > 0) {
    for (let i = 1; i <= currentLine.length; i++) {
      strOfName += i + '. ' + currentLine[i] + ', '
    }
    return strOfName;
  } else {
    return "The line is currently empty."
  }
}