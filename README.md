
# Proyecto de Análisis y desarrollo de sistemas de información - SENA 
## Aplicación para sistema de reservas y usuarios de Hotel
### Proyecto Api:
- [API](../main/api)
### Proyecto Cliente:
- [CLIENT](../main/client)




#### Tecnologías usadas: 𝐑𝐞𝐚𝐜𝐭, 𝐑𝐞𝐝𝐮𝐱, 𝐂𝐒𝐒, 𝐍𝐨𝐝𝐞𝐉𝐬, 𝐄𝐱𝐩𝐫𝐞𝐬𝐬, 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐒𝐐𝐋, 𝐒𝐞𝐪𝐮𝐞𝐥𝐢𝐳𝐞, 𝐆𝐢𝐭𝐇𝐮𝐛
- 𝐅𝐫𝐨𝐧𝐭 𝐄𝐧𝐝
Se utilizó React para maquetar los componentes y Redux para manejar estados globales.
Todos los componentes fueron estilizados utilizando CSS puro (sin librerías de terceros)
- 𝐁𝐚𝐜𝐤 𝐄𝐧𝐝
El  Back End fue desarrollado en NodeJs utilizando la libreria Express para manejar las peticiones HTTP.
- 𝐃𝐚𝐭𝐚𝐁𝐚𝐬𝐞
Para esta se utilizo PostgreSQL como gestor de base de datos y Sequelize como ORM.

### Instalación

#### Requisitos
El ordenador debe tener los siguientes aplicativos y/o entornos instalados

- Node
Puede descargarse desde su sitio oficial https://nodejs.org/es/download/

- Postgresql

Puede descargarse desde aquí https://www.postgresql.org/download/

#### Pasos a seguir
##### Es necesario crear la base de datos desde la consola de sql shell (psql) o desde un gestor de base de datos como pgAdmin. La base de datos desde shell puede crearse con el siguiente comando db:create nombre_base_de_datos el nombre puede ser a elección. 


#####  Clonar el repositorio en el ambiente local

##### Para levantar el frontend:
- Cambiar a la carpeta client con el comando cd client desde la carpeta raiz del proyecto
- Instalar las dependencias de node con el comando npm install
- Levantar el proyecto con el comando npm run dev
- Abrir el enlace que retorna la consola

##### Para levantar el backend
- Ir a la carpeta api con el comando cd api desde la consola en la carpeta raiz del repositorio e instalar las dependencias de node con el comando npm install
- Crear el archivo .env con las variables de entorno que se especifican en el archivo envexample. El nombre de la base de datos debe ser el mismo que se definió en el paso 1
- Ejecutar npm run dev para levantar el servidor del backend



