const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  // cambiaremos el nivel de info a debug para que se registren todos los mensajes de registro, incluyendo la información, advertencias y errores.
  format: winston.format.json(),
  // tenemos varios formatos de registro disponibles, como JSON, texto plano y fechas , estamos utilizando el formato JSON para que los registros se almacenen en un formato estructurado y fácil de analizar.
  defaultMeta: { service: 'user-service' },
  transports: [
    //transports son los destinos donde se enviarán los registros, como la consola, archivos o servicios de registro externos. En este caso, estamos utilizando dos transportes: uno para escribir los registros de error en un archivo llamado error.log y otro para escribir todos los registros en un archivo llamado combined.log.
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //añadiremos console.log como transporte para que los registros también se muestren en la consola, además de los archivos de registro. Esto nos permitirá ver los registros en tiempo real mientras ejecutamos el script.
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new winston.transports.File({ filename: 'combined.log' }),

  ],
});
// al ejecutar el script (dentro de la carpeta usar npm start), se generarán dos archivos de registro: error.log y combined.log. El archivo error.log contendrá solo los mensajes de error, mientras que el archivo combined.log contendrá todos los mensajes de registro, incluyendo información, advertencias y errores.



logger.info('Hello, this is an informational message');
logger.debug('Hello, this is a debug message');
logger.warn('Hello, this is a warning message');
logger.error('Hello, this is an error message');


// cuando ejecutamos npm start, se generarán dos archivos de registro: error.log y combined.log. El archivo error.log contendrá solo el mensaje de error "Hello, this is an error message", mientras que el archivo combined.log contendrá todos los mensajes de registro, incluyendo la información "Hello, this is an informational message", la advertencia "Hello, this is a warning message" y el error "Hello, this is an error message". El mensaje de depuración "Hello, this is a debug message" no se registrará en ninguno de los archivos porque el nivel de registro predeterminado es 'info', lo que significa que solo se registrarán los mensajes con un nivel de importancia igual o superior a 'info'.
// a exepcion de debug, que no se registrará en ninguno de los archivos porque el nivel de registro predeterminado es 'info', lo que significa que solo se registrarán los mensajes con un nivel de importancia igual o superior a 'info'.


// https://www.npmjs.com/package/winston


// otra buena practica es crear una carpeta llamada logger donde guardamos la configuracion del logger y luego importarlo en el archivo index.js, de esta manera mantenemos nuestro código más organizado y modular.
// no es necesario aprender de memoria todas las opciones de configuración de winston, ya que la documentación oficial es muy completa y nos permite consultar cualquier duda que tengamos. Sin embargo, es importante tener una idea general de cómo funciona winston y cómo podemos configurarlo para adaptarlo a nuestras necesidades.
// ya que esto nos sirve para poder registrar errores en nuestro desarrollo y poder analizarlos posteriormente, lo que nos permite mejorar la calidad de nuestro código y detectar posibles problemas antes de que se conviertan en errores graves. Además, nos permite tener un registro histórico de los errores que se han producido en nuestra aplicación, lo que nos ayuda a identificar patrones y tendencias en los errores y a tomar decisiones informadas sobre cómo mejorar nuestro código.
