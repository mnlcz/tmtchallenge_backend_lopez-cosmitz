# tmt-challenge-backend

Backend del projecto para la entrevista fullstack.

## Cosas a tener en cuenta

Si bien me siento más cómodo que con el frontend, es mi primera vez con `NodeJS` y `express`, por lo que puede haber ciertas malas optimizaciones.

- El ORM utilizado es [Sequelize](https://sequelize.org/).
- La BD la llené inicialmente con un par de seeds que se ven en el proyecto, haciendo uso de `sequelize-cli`.
- Las pruebas las fuí haciendo mediante [Postman](https://www.postman.com/) por lo que hay ciertos registros extra además de los del seed.
- El encriptado de las contraseñas de realiza mediante [bcrypt](https://www.npmjs.com/package/bcrypt)

## Setup 

```sh
npm install
```

## Start

```sh
npm run start
```