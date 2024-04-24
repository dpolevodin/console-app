import chalk from "chalk";

if (process.argv.length < 3) {
  console.error(chalk.red("Укажите величину в дюймах"));
  process.exit(1);
}
const inches = parseFloat(process.argv[2]);
if (!inches) {
  console.error(chalk.red("Укажите дюймы в виде числа"));
  process.exit(1);
}
const centimeters = inches * 2.54;
console.log(`${chalk.blue(inches)} >>> ${chalk.green(centimeters)} см`);
