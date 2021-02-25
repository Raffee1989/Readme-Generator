// Node Modules
const inquirer      = require("inquirer");
const fs            = require('fs');
const axios         = require('axios');

// Importing file
const generate      = require('./utils/generateMarkdown');

// Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links: "
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions: "
    },
    {
        type: "input",
        name: "licence",
        message: "What licences is being used (ie: GPL v3): "
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list the name of contributing parties: "
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests: "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? "
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name? "
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link? "
    },
];

// Inquirer for generating the questions
inquirer
    // Questions will prompt to the user in terminal
    .prompt(questions)

    // Data Receives from users
    .then(function(data){
        //console.log("Line 73", data)

        // API Calls from GitHub
        const Url = `https://api.github.com/users/${data.username}`;

        // Getting Data from GitHub URL
        axios.get(Url).then(function(response) {
            //console.log('line 80', response)

            const githubInfo = {
                githubImage: response.data.avatar_url,
                profile: response.data.html_url,
                name: response.data.name
            };

           
          // Using file system, Generating the Readme file.  
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created successfully!");
          });
        });

});

// Object Initializer function
function init() {

}

init();
