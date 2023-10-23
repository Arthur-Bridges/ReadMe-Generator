import inquirer from "inquirer";
import fs from 'fs';

inquirer.prompt([
    {
        /* input for project title*/
        type: 'input',
        message: 'What is the Project name?: ',
        name: 'title',
    },
    {
          /*input for description title*/
          //Description content
          type: 'input',
          message: 'Please enter the description of project (if no description type "N/A"): ',
          name: 'description',
    },
    {
          /* input for installation title*/
          //Installation content
          type: 'input',
          message: 'Please instruct user on how to use ',
          name: 'installation'
    },
    {
          /* input for Usage title*/
          //MAY BE A SPECIAL CASE TO INCLUDE THE NUMBERS
          //with the Usage content arranged with chronological order
          type: 'input',
          message: ' ',
          name: 'usage'
    },
    {
          /* input for Credit title*/
          //credit content 
          type: 'input',
          message: ' ',
          name: 'credit(s)'
    },
    {
          /*input for License title */
          //License content
          type: 'input',
          message: ' ',
          name: 'license'
    },
    {
          /* Deployed website Title*/
          //content inluding url and screenshot
          type: 'input',
          message: ' ',
          name: 'deployment'
    },
    {
          /* badges title*/
          //content for badges 
          type: 'input',
          message: ' ',
          name: 'badges'
    }
]).then((response) => {
    //create the file with readMe input here
    const filename = `${}`;
});