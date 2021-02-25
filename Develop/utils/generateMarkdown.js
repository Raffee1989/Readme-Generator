// Template of Readme Generator
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

${data.badge}

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation

${data.installation}


## Licence

${data.licence}

## Contributors

${data.contributing}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})

## GitHub

![Photo](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${data.email}>

`;
}

// Exporting this file to Index.js file
module.exports = generateMarkdown;
