// const sample1 = require('../utilities/sample1.js');
// const sample2 = require('../utilities/sample2.js');
const readline_1 = require('readline');
// const currentFile = __filename.split('\\').splice(0).join('\\')
// console.log(currentFile);

// setImmediate(() => {
//     console.log("Print Fifth");
// }, 0);
// setTimeout(() => {
//     console.log("Print Third");
// });

// process.nextTick(() => {
//     console.log('Print Second');
// })

// console.log('Print First');

// setTimeout(() => {
//     console.log("Print Forth");
// });

// order of functions
// 1. console.log
// 2. process.nextTick()
// 3. setTimeout()
// 4.setImmediate()

// const arr = [1, 2, 3];
// const arr2 = [3, 4, 6];
// // sample1.js functions module Test
// const sum = sample1.sum(arr);
// const concat = sample1.concat(arr, arr2);
// console.log(sum);
// console.log(concat);
// sample2.js functions module Test
// const cut = sample2.cut3(arr);
// const max = sample2.lgNum(arr);
// console.log(max);
// console.log(cut);
// console.log(arr);
// console.log('Prettier Test');

// # Instructions

// Your goal is to set up an NPM project which will lint and prettfy the code in index.js.
// Configure the project, install the proper node modules, and configure eslint and prettier.
// You will also need to include scripts that run eslint and prettier.
// There are errors in the index.js file. Run the scripts and fix the errors based off the results displayed in the console.

// Import readline module for getting input from console
// Find more here: https://nodejs.org/api/readline.html#readline_readline
// define question/output interface
const rl = readline_1.createInterface({
  // readable stream
  input: process.stdin,
  // writeable stream
  output: process.stdout,
});
// Create questions for STDIN Input from console.
const menuQ = () => {
  return new Promise((resolve, reject) => {
    try {
      // (readable, writeable from readline interface)
      rl.question('Your choice: ', (answer) => {
        resolve(answer);
      });
    } catch (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }
  });
};
let milkQ = () => {
  return new Promise((resolve, reject) => {
    rl.question('How many cups of milk to add? ', (answer) => {
      resolve(answer);
    });
  });
};

// User questions
const userOptions = async (mochaObject) => {
  let milkPicked = await milkQ();
  let milkChoice = parseInt(milkPicked);
  var espPicked = await espressoQ();
  let espChoice = parseInt(espPicked);
  // If peppermint mocha
  if (mochaObject instanceof PeppermintMocha) {
    let pepPicked = await peppermintQ();
    let pepChoice = parseInt(pepPicked);
    mochaObject.peppermintSyrup = pepChoice;
  }
  mochaObject.milk = milkChoice;
  mochaObject.shot = espChoice;
  mochaObject.prepare();
};

const espressoQ = () => {
  return new Promise((resolve, reject) => {
    rl.question('How many shots of espresso to add? ', (answer) => {
      resolve(answer);
    });
  });
};
const peppermintQ = () => {
  return new Promise((resolve, reject) => {
    rl.question('How many shots of peppermint to add? ', (answer) => {
      resolve(answer);
    });
  });
};
// Create parent class Mocha
class Mocha {
  constructor() {
    this.milk = 1;
    this.shot = 1;
    this.chocolateType = 'dark';
  }
  // list the ingredients of the mocha
  prepare() {
    console.log('Your', this.chocolateType, ' Chocolate Mocha Ingredients:');
    console.log(this.chocolateType, ' chocolate');
    console.log('Cups of milk: ', this.milk);
    console.log('Cups of espresso: ', this.shot, '\n\n');
  }
}
// inherits from Mocha
class WhiteChocolateMocha extends Mocha {
  constructor() {
    super(...arguments);
    this.chocolateType = 'White';
  }
}
// inherits from Mocha
class DarkChocolateMocha extends Mocha {
  constructor() {
    super(...arguments);
    this.chocolateType = 'Dark';
  }
}
// inherits from Mocha
class PeppermintMocha extends Mocha {
  constructor() {
    // include super to pull in parent constructor
    super();
    this.peppermintSyrup = 1;
  }
  // Overrides Mocha prepare with additional statements
  prepare() {
    console.log('Your Peppermint Mocha Ingredients:');
    console.log('Dark chocolate');
    console.log('Cups of milk: ', this.milk);
    console.log('Cups of espresso: ', this.shot);
    console.log('Pumps of peppermint: ', this.peppermintSyrup, '\n\n');
  }
}

const main = () => {
  let menuChoice = 0;
  const buildMocha = async () => {
    do {
      const optionPicked = await showMenu();
      menuChoice = parseInt(optionPicked);
      switch (menuChoice) {
        case 0: {
          break;
        }
        case 1:
          let whiteMochaVar = 0;
          const whiteMocha = new WhiteChocolateMocha();
          await userOptions(whiteMocha);
          break;
        case 2:
          const darkMocha = new DarkChocolateMocha();
          await userOptions(darkMocha);
          break;
        case 3:
          const peppermintMocha = new PeppermintMocha();
          await userOptions(peppermintMocha);
          break;
        default: {
          console.log('Option invalid, please choose from menu.');
          break;
        }
      }
    } while (menuChoice != 0);
    // end readline process
    rl.close();
  };
  buildMocha();
};
main();

// display menu and return selected menu item
const showMenu = async () => {
  console.log(
    'Select Mocha from menu: \n',
    '1: Create White Chocolate Mocha \n',
    '2: Create Dark Chocolate Mocha \n',
    '3: Create Peppermint Mocha\n',
    '0: Exit\n'
  );
  const qMenu = await menuQ();
  return qMenu;
};
// Lesson 1 finshed