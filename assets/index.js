const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your projects title?",
    },
    {
      type: "input",
      name: "description",
      message: "Description",
    },
    {
      type: "input",
      name: "Table",
      message: "Table-of-Contents",
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation",
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage",
    },
    {
      type: "input",
      name: "License",
      message: "License",
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "questions",
      message: "Git Hub UserName",
    },
  ]);
}

function generateHTML(answers) {
  return `
# ${answers.title}

## Description

 ${answers.description}


## Table of Contents 

 * ${answers.Table}

## Usage Instructions


  ${answers.Usage}

## License
 * ${answers.License}


## Contributers


 ${answers.contributing}

## Git Hub UserName

### ${answers.questions}

  `;
}

promptUser()
  .then(function (answers) {
    const html = generateHTML(answers);

    return writeFileAsync("README.md", html);
  })
  .then(function () {
    console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
    console.log(err);
  });
