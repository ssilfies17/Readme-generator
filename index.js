const inquirer = require('inquirer');
const fs = require('fs');

const userAnswers = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide detailed instructions and examples for use of the project. Include screenshots if desired/relevant.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators. Include contact links such as GitHub, email, etc.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please include a license. "Choosealicense.com" if unsure. ',
        },
    ]);
};

const generateReadme = ({ title, description, installation, usage, credits, license }) =>

`# ${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}
`;

