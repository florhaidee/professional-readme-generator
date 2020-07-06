const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
/* ---- User questions --------*/
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of your application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Title of your application!');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a descripion of the project!');
                return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'Provide installation instruccion (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions of the project!');
                return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'Provide usage information (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license are you using for this project? (Choose one)',
            choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'ISC', 'MIT', 'Unlicense'],
            validate: answer => {
                if (answer.length < 1) {
                    console.log('Please choose one license for your project!');
                    return false;
                } else if (answer.length >1) {
                    console.log('Please choose just one license for your project!');
                    return false;
                }
                return true;
            },            
            filter: function (choice) {
                return choice
            }            
        },
        {
            type: 'editor',
            name: 'contributing',
            message: 'Provide constribution guidelines (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter constribution guidelines!');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add a Tests section ?',
            default: true
        },
        {
            type: 'editor',
            name: 'tests',
            message: 'Provide tests instructions',
            when: ({ confirmTests }) => confirmTests
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },

    ])
};
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw err;

        console.log('File complete! Check out readme.md to see the output!');
    });
}

// function to initialize program
function init() {
    promptUser()
        .then(data => {
            console.log(data);
            writeToFile('./dist/readme.md', data)
        })
        .catch(err => {
            console.log(err);
        });
};

// function call to initialize program
init();