# Custom-Task-Azure-Devops-
Here I've Provided several types of source code to create a custom task and implementation in azure devsops
Set up your task. Do every part ofStep 1 within the buildandreleasetask folder.
Createthefolder structurefor thetask and install therequired libraries and dependencies.
From within your buildandreleasetask folder, run thefollowing command:
npm init --yes
We providea library,azure-pipelines-task-lib, that should be used to createtasks. Add it to your library.
npm install azure-pipelines-task-lib --save
We providea library,azure-pipelines-task-lib, that should be used to createtasks. Add it to your library.
npm install azure-pipelines-task-lib --save
We providea library,azure-pipelines-task-lib, that should be used to createtasks. Add it to your library.
npm install azure-pipelines-task-lib --save
 Createa .gitignore fileand add node_modules to it. Your build process should do an npm install and a
typings install so that node_modules are builteach timeand don't need to bechecked in
echo node_modules > .gitignore
npm install mocha --save-dev -g
npm install sync-request --save-dev
npm install @types/mocha --save-dev
npm install typescript@4.0.2 -g --save-dev
Create tsconfig.json compiler options
tsc --init --target es6
Install test tools
npm install mocha --save-dev -g
npm install sync-request --save-dev
npm install @types/mocha --save-dev
Run the tests
tsc
mocha tests/_suite.js

Stage: Run and publish unit tests
"scripts": {
"testScript": "mocha ./TestFile --reporter xunit --reporter-option output=ResultsFile.xml"
},
ou can restrict Visual Studio Codespaces commands usageand variables, which can beset by task.This action
could be useful to prevent unrestricted access to variables/vso commands for custom scripts which task
executes.Werecommend thatyou set it up for new tasks.To apply -you may need to add thefollowing
statement to your task.json file:
"restrictions": {
"commands": {
"mode": "restricted"
},
"settableVariables": {
"allowed": ["variable1", "test*"]
}
}
