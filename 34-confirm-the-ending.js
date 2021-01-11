function confirmEnding(str, target) {
  const regex = new RegExp(target+'$')
  return regex.test(str)
}

confirmEnding("Bastian", "n");