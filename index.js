const inquirer = require('inquirer');
/* ---- Profile questions --------*/
const promptUser = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
]);
};
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    promptUser()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
        console.log(err);
        });
};

// function call to initialize program
init();
