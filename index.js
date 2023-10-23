import inquirer from "inquirer";
import fs from 'fs';

inquirer.prompt({
    [
        /* input for project title*/
    ],
    {
          /*input for description title*/
          //Description content
    },
    {
          /* input for installation title*/
          //Installation content
    },
    {
          /* input for Usage title*/
          //with the Usage content arranged with chronological order
    },
    {
          /* input for Credit title*/
          //credit content 
    },
    {
          /*input for License title */
          //License content
    },
    {
          /* Deployed website Title*/
          //content inluding url and screenshot
    },
    {
          /* badges title*/
          //content for badges 
    }
}).then((response) => {
    //create the file with readMe input here
    const filename = `${}`;
});