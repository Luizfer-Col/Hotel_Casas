
# Proyecto de An谩lisis y desarrollo de sistemas de informaci贸n - SENA 
## Aplicaci贸n para sistema de reservas y usuarios de Hotel
### Proyecto Api:
- [API](../main/api)
### Proyecto Cliente:
- [CLIENT](../main/client)




#### Tecnolog铆as usadas: 饾悜饾悶饾悮饾悳饾惌, 饾悜饾悶饾悵饾惍饾惐, 饾悅饾悞饾悞, 饾悕饾惃饾悵饾悶饾悏饾惉, 饾悇饾惐饾惄饾惈饾悶饾惉饾惉, 饾悘饾惃饾惉饾惌饾悹饾惈饾悶饾悞饾悙饾悑, 饾悞饾悶饾惇饾惍饾悶饾惀饾悽饾惓饾悶, 饾悊饾悽饾惌饾悋饾惍饾悰
- 饾悈饾惈饾惃饾惂饾惌 饾悇饾惂饾悵
Se utiliz贸 React para maquetar los componentes y Redux para manejar estados globales.
Todos los componentes fueron estilizados utilizando CSS puro (sin librer铆as de terceros)
- 饾悂饾悮饾悳饾悿 饾悇饾惂饾悵
El  Back End fue desarrollado en NodeJs utilizando la libreria Express para manejar las peticiones HTTP.
- 饾悆饾悮饾惌饾悮饾悂饾悮饾惉饾悶
Para esta se utilizo PostgreSQL como gestor de base de datos y Sequelize como ORM.

### Instalaci贸n

#### Requisitos
El ordenador debe tener los siguientes aplicativos y/o entornos instalados

- Node
Puede descargarse desde su sitio oficial https://nodejs.org/es/download/

- Postgresql
Puede descargarse desde aqu铆 https://www.postgresql.org/download/

#### Pasos a seguir
##### Es necesario crear la base de datos desde la consola de sql shell (psql) o desde un gestor de base de datos como pgAdmin. La base de datos desde shell puede crearse con el siguiente comando db:create nombre_base_de_datos el nombre puede ser a elecci贸n. 


#####  Clonar el repositorio en el ambiente local

##### Para levantar el frontend:
- Cambiar a la carpeta client con el comando cd client desde la carpeta raiz del proyecto
- Instalar las dependencias de node con el comando npm install
- Levantar el proyecto con el comando npm run dev
- Abrir el enlace que retorna la consola

##### Para levantar el backend
- Ir a la carpeta api con el comando cd api desde la consola en la carpeta raiz del repositorio e instalar las dependencias de node con el comando npm install
- Crear el archivo .env con las variables de entorno que se especifican en el archivo envexample. El nombre de la base de datos debe ser el mismo que se defini贸 en el paso 1
- Ejecutar npm run dev para levantar el servidor del backend

### Capturas

#### Registro
![Login](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/01-register.png)

#### Login
![Login](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/02-login.png)

#### Home
![Home](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/03-home.png)

#### Habitaciones
![Rooms](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/04-rooms.png)

#### B煤squeda
![Search](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/05-search.png)

#### Cuenta
##### Datos
![Data](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/Account-data.jpg)

##### Editar datos
![Edit](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/Account-edit.jpg)

##### Contrase帽a
![pass](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/Account-pass.jpg)

##### Reservaciones
![res](https://raw.githubusercontent.com/Luizfer-Col/Hotel_Casas/main/screens/Account-res.jpg)






