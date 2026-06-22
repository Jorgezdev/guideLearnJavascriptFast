const logger = require('./logger');

logger.info('Hello, this is an informational message');

// esto es igual al index.js, pero en este caso estamos importando el logger desde un archivo separado llamado logger.js, lo que nos permite mantener nuestro código más organizado y modular. Además, podemos reutilizar el logger en otros archivos de nuestro proyecto sin tener que duplicar el código de configuración del logger.

// al ejecutar npm start, se generarán dos archivos de registro: error.log y combined.log. El archivo error.log contendrá solo el mensaje de error "Hello, this is an error message", mientras que el archivo combined.log contendrá todos los mensajes de registro, incluyendo la información "Hello, this is an informational message", la advertencia "Hello, this is a warning message" y el error "Hello, this is an error message". El mensaje de depuración "Hello, this is a debug message" no se registrará en ninguno de los archivos porque el nivel de registro predeterminado es 'info', lo que significa que solo se registrarán los mensajes con un nivel de importancia igual o superior a 'info'.
