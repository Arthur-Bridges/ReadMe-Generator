import inquirer from "inquirer";
import fs from 'fs';

inquirer.prompt([
      {
            type: 'input',
            message: 'Provide the Github username: ',
            name: 'githubUsername',
      },
      {
            type: 'input',
            message: 'Provide the email: ',
            name: 'email',
      },
    {
        type: 'input',
        message: 'What is the Project name?: ',
        name: 'title',
    },
    {
          type: 'input',
          message: 'Please enter the description of project (if no description type "N/A"): ',
          name: 'description',
    },
    {
      type: 'input',
      message: 'Table of contents?: ',
      name: 'tableOfContents',
      },
    {
          type: 'input',
          message: 'Please instruct user on how to use: ',
          name: 'installation',
    },
    {
          type: 'input',
          message: 'What are the usage instructions: ',
          name: 'usage',
    },
    {
          type: 'checkbox',
          message: 'Choose a license for your project: ',
          name: 'license',
          choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost Software License 1.0', 'Eclipse'],
    },
    {
      type: 'input',
      message: 'Provide the list of contributors and/or cite resource(s): ',
      name: 'contribution',
      },
    {
          type: 'input',
          message: 'Provide a link to the deployed website and/or screenshot: ',
          name: 'test',
    },
]).then((response) => {
    const filename = `${response.title.toLowerCase().split(' ').join('-')}-README.md`;

    const readMeContent = ` # ${response.title}

   ![License Badge](https://img.shields.io/badge/License-${response.license}-blue)

   ## Description
   
   ${response.description}
   
   ## Table of Contents
   
   ${response.tableOfContents}
   
   ## Installation
   
   ${response.installation}
   
   ## Usage
   
   ${response.usage}
   
   ## License
   
   This project is licensed under the ${response.license} License. See the [LICENSE](LICENSE) file for details.

   ## Contributors
   
   ${response.contribution}
   
   ## Test
   
   ${response.test}
   
   ## Questions
   
   For any questions please contact me at ${response.githubUsername}(https://github.com/${response.githubUsername}) or email ${response.email}.
  `;

   fs.writeFile(filename, readMeContent, () => {
      console.log(`"${filename}" has been successfully created!`);
   });
});