<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo.
1.- Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
2.- Clonar el repositorio.

3.- Hacer un pull de la rama pokedex:
```
git pull origin pokedex
```

4.- Ejecutar:

```
yarn install
```

5.- Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

6.- Levantar la base de datos.
```
docker-compose up -d
```

7.- Reconstruir la Base de Datos con la Seed
```
localhost:3000/api/v2/seed
```

## Stack Usado
* MongoDB
* Nest