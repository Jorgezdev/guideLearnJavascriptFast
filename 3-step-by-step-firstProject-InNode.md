

we open the terminal in the project we're working on in VS Code, verify that we're in the correct project, and enter the following command:

npm init 

It is likely that it will give us a restriction with the following information: 


""""""""""""""""""""""""""""""""""""""""""
npm : The file could not be uploaded C:\Program Files\nodejs\npm.ps1 
Because script execution is disabled on this system.
For more information, see the topic about_Execution_Policies in   
https:/go.microsoft.com/fwlink/?LinkID=135170.
+ npm init
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityExceptio  
   n
    + FullyQualifiedErrorId : UnauthorizedAccess

""""""""""""""""""""""""""""""""""""""""""

This is a Powershell security restriction in windows; you must add the following code to PowerShell:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


After that, we return to the terminal of our Vs Code project and add the previous command:

npm init 

This will create a package.json file where we will decide some characteristics of our project sucj as name, version, description, entry point (usually this file name is index.js but it can be modified), test type (usually jest), repository name, keywords, author, etc. After filling in the data, the aforementioned file will be created.


"""""""""""""example"""""""""""""

package name: (javascript-open-bootcamp)
version: (1.0.0)
description: mi primer proyecto en node.js
entry point: (index.js)
test command:
git repository:
keywords: holamundo, first project
author: jorge zavala
license: (ISC)
type: (commonjs)
About to write to C:\Users\jorge.zavala\Desktop\projectsPractices\javascript open bootcamp\package.json:

""""""""""""""


note: To run 'console.log("Hello world")' in the VS Code terminal, you must have Node.js installed.