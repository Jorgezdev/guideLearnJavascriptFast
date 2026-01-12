

abrimos la terminal en el proyecto cual estamos trabajando en vs code, verificamos en la terminal que estamos dentro del proyecto cual trabajamos y ponemos el siguiente comando : 

npm init 

es probable que nos de una restriccion con la siguiente informacion:

""""""""""""""""""""""""""""""""""""""""""""""""""""""
npm : No se puede cargar el archivo C:\Program Files\nodejs\npm.ps1 
porque la ejecución de scripts está deshabilitada en este sistema. Para 
obtener más información, consulta el tema about_Execution_Policies en   
https:/go.microsoft.com/fwlink/?LinkID=135170.
+ npm init
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityExceptio  
   n
    + FullyQualifiedErrorId : UnauthorizedAccess

""""""""""""""""""""""""""""""""""""""""""""""""""""""

es una restricción de seguridad de PowerShell en Windows desde la Powershell, debes agregar el siguiente codigo en la power shell:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


Luego de eso nuevamente volvemos a la terminal de nuestro proyecto en vscode y en la terminal agregamos el comando anterior: 

npm init 

Esto nos creara un archivo package.json cual decidiremos algunas caracteristicas de nuestro proyecto como nombre, la version, descripcion, entry point (por lo general este nombre de archivo es index.js pero es modificable),  tipo de test (por lo general es jest), nombre del repositorio, palabras clave, autor.. etc... tras finalizar llenando los datos se creara el archivo mencionado anteriormente. 

""""

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

""""




nota: para hacer un console.log("Hola mundo") en la terminal de vscode se debe tener instalado nodejs 