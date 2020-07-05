// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    $data.description

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Instalation
    $data.description

  ## Usage

  ## License

  ## Contributing

  ## Test

  ## Questions
`;
}

module.exports = generateMarkdown;
