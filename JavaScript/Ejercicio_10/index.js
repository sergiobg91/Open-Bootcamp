import { suma, producto } from './controller.js';
import chalk from 'chalk';


console.log(`El producto de 1 * 2 es: ${producto(1, 2)}`);
console.log(chalk.green(`La suma de 4 + 5 es: ${suma(4, 5)}`));