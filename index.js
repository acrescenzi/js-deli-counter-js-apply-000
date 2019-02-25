function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

let ticketMachine = 1
function takeANumber(line) {
  let customerTicket = ticketMachine
  line.push(ticketMachine)
 ticketMachine++
  return `Welcome, ${customerTicket}. You are number ${line.length} in line.`
};