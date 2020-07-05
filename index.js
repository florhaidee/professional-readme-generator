const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
/* ---- User questions --------*/
const promptUser = () => {
    return inquirer.prompt([{
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
    }]);
};
// array of questions for user
const questions = [

];

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