# PruebaTec

El proyecto con el que se desarrollo la API REST se encuentra comprimido con el mismo nombre con el que fue enviado.

Ademas, se explica la manera en la que se hizo la integracion entre la API y Angular.
Nota: Cabe aclarar que la version de angular es la 16, puesto que la version 10 del aplicativo generaba problemas a la hora de querer integrar el servicio de HTTPClient.

# La integración

Dentro del proyecto `Prueba_Dev_front` existe un archivo llamado `Program.cs`, este archivo fue modificado agregando servicios y metodos para permitir el acceso entre servidores, puesto que es necesario e indispensable que la `API REST` permita el acceso para consultar la información que contiene la API.

Explicitamente, se agregarón estas lineas de código:

`builder.Service.AddCors(
 options => {
 options.AddPolicy("AllowAngularOrigins",
 builder => builder
    .WithOrigins("http://localhost:4200")
    .AllowAnyHeader()
    .AllowAnyMethod());
});`

`app.UseCors("AllowAngularOrigins");`

Esto con el fin de permitir el acceso a la información a la dirección de Angular, es decir: `http://localhost:4200`

Finalmente, dentro de Angular, en el archivo `api.service` que se encuentra dentro del servico `service`, se hace uso del import `HttpClient` y se indica la URL de en donde se encuentra la informacion que necesitamos, en este caso: `http://localhost:5273/WeatherForecast`. Esta dirección aloja informacion sobre el clima y es la direccion que utiliza el servicio para mostrar la informacion al hacer la peticion `GET`.

# Integración del patrón de diseño Redux

Para integrar el patrón de diseño redux se hizo necesario crear un nuevo grupo de carpetas, que según la arquitectura de Redux `(ngrx)`, existen:
una carpeta general llamada:
-`Store`
Y los elementos que van dentro de esta:
1. `Actions`
2. `Effects`
3. `Reduceers`
4. `Selectors`

Cada una conformando y haciendo parte esencial para el `control de los estados` y `acciones` de la aplicacion, asi mismo se modifico el archivo `api.service.ts`, para acoplarlo al funcionamiento con la integración del patrón.

En la imágen de Angular, se lograra apreciar la `obtencion de los datos de la API externa`, y un conjunto de `mensajes` asociados a la integracion del patron.

![image](https://github.com/KarenLPC001/prueba-tec/assets/149728928/4598bf38-6d1c-4712-bffc-590c544e1d9f)

# Sobre Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
