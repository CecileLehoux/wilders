const wilders = {
    wilder1 :"Claire",
    wilder2 : "Emma",
    wilder3 : "Anas",
    wilder4 : "Thomas",
}

const chalk = module.require('chalk');

//for (let key in wilders ) {
 //   console.log(chalk.blue.bgRed.bold(`${wilders[key]}`));
//}

console.log(chalk.blue (wilders.wilder1));
console.log(chalk.yellow (wilders.wilder2));
console.log(chalk.green (wilders.wilder3));
console.log(chalk.red (wilders.wilder4));


