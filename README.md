## Componente
En este proyecto he diferenciado entre 3 tipos de componentes:

1. Componentes reutilizables: Son los que se encuentran en la carpeta 'components', y se podrían reutilizar por toda la app.
2. Componentes vistas: Son los componentes encargados de renderizar las pantallas de la app.
3. Componentes de utilidad: Son componentes que se encuentran dentro de otro componente, y que en principio solo es usado por su componente padre. Ej: 'CoinItem' está dentro del componente vista 'Home'.
## Estructura del proyecto

El proyecto esta dividido en en la siguientes carpetas:

### Components
Donde se encuentran los componentes que probablemente sean usado por toda la aplicación.

### Hooks
Carpeta donde se encuentra los hooks que vamos a utilizar en la aplicación. En este caso unicamente tenemos un hook que es el encargado de traer los datos de las monedas.

### Navigator
En este directorio se encuentran implementado el navegador de la app. En este caso unicamente he tenido que implementar un stack navigator con react-navigation.

### Services
Aquí se encuntra todo lo relacionado con la llamada al servicio que provee a la aplicación de los datos de las criptomonedas. En ella se encuentran tanto la llamada al servicio como los tipos necesarios para manejar los datos que devuelve.

### Views
Carpeta donde se encuentras los componentes que van a ser renderizados como vistas.