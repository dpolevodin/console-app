if (process.argv.length < 3) {
  console.error("Укажите величину в дюймах");
  process.exit(1);
}
const inches = parseFloat(process.argv[2]);
if (!inches) {
  console.error("Укажите дюймы в виде числа");
  process.exit(1);
}
const centimeters = inches * 2.54;
console.log(`${inches} >>> ${centimeters} см`);
