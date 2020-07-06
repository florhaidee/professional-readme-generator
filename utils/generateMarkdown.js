const fs = require('fs');
const copyFile = data => {
  fs.copyFile(data, './dist/license.txt', err => {
    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) throw err;
    console.log('license was copied to destination');
  });
}
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
    copyFile('./src/AGPLv3.txt')
    return 'AGPLv3'
  }
  if (data === 'GNU GPLv3') {
    copyFile('./src/GPLv3.txt')
    return 'GPLv3'
  }
  if (data === 'GNU LGPLv3') {
    copyFile('./src/LGPLv3.txt')
    return 'LGPLv3'
  }
  if (data === 'Mozilla Public License 2.0') {
    copyFile('./src/Mozilla-license.txt')
    return 'Mozilla_Public_License_2.0'
  }
  if (data === 'Apache License 2.0') {
    copyFile('./src/apache-2.0.txt')
    return 'Apache_License_2.0'
  }
  if (data === 'ISC') {
    copyFile('./src/ISC.txt')
    return 'ISC'
  }
  if (data === 'MIT') {
    copyFile('./src/MIT-license.txt')
    return 'ISC'
  }
  if (data === 'Unlicense') {
    copyFile('./src/unlicense.txt')
    return 'Unlicense'
  }
};
// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const license = data.license.toString();
  const aux = generateLicense(license);

  return `# ${data.title}             ![badge](https://img.shields.io/badge/license-${aux}-blue)
  ## Description
    ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    Copyright © ${new Date().getFullYear()} ${data.github}. 
    Licensed under the ${license} to see more about this license go to [license.txt](license.txt) 

  ## Contributing
    ${data.contributing}

${generateTests(data.tests)}

  ## Questions
    If you have more questions about this application, you can contact me by:
      email: ${data.email}
      GitHub username: ${data.github}

  ## Made by ${data.github}
`;
}

module.exports = generateMarkdown;
