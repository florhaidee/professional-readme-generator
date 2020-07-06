const fs = require('fs');
// create a tests section
const generateTests = data => {
  if (!data) {
    return '';
  }

  return `
  ## Tests
    ${data}
  `;
};
// create aditional page for license
const generateLicense = data => {
  console.log(data)
  if (data === 'GNU AGPLv3') {
    fs.copyFile('./src/AGPLv3.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'GNU GPLv3') {
    fs.copyFile('./src/GPLv3.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'GNU LGPLv3') {
    fs.copyFile('./src/LGPLv3.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'Mozilla Public License 2.0') {
    fs.copyFile('./src/Mozilla-license.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'Apache License 2.0') {
    fs.copyFile('./src/apache-2.0.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'Apache License 2.0') {
    fs.copyFile('./src/apache-2.0.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
      
    });
  }
  if (data === 'ISC') {
    fs.copyFile('./src/ISC.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'MIT') {
    fs.copyFile('./src/MIT-license.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
  if (data === 'Unlicense') {
    fs.copyFile('./src/unlicense.txt', './dist/license.txt', err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) throw err;
      console.log('license was copied to destination');
    });
  }
};
// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const license = data.license.toString();
  generateLicense(license);

  return `# ${data.title}             ![badmath](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)
  ## Description
    ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Instalation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    Copyright © ${new Date().getFullYear()} ${data.github}. 
    Licensed under the [${license} license](./dist/license.txt). 

  ## Contributing
    ${data.contributing}

${generateTests(data.tests)}

  ## Questions
    If you have more questions about this application, you can cantact me by:
      email: ${data.email}
      GitHub username: ${data.github}

  ## Made by ${data.github}
`;
}

module.exports = generateMarkdown;
