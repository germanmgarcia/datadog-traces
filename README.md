# datadog-traces

Ejemplo de implementación de traces con el agente de DataDog, utilizando docker

### Installation

Requiere NPM, Docker, y Docker-Compose

```sh
$ npm install --save ./postgresql-node-restapi
$ docker-compose up -d --build
$ docker-compose exec -it rest-api-slim-php-php-container composer update
$ docker-compose exec mysql mysql -e 'DROP DATABASE IF EXISTS rest_api_slim_php ; CREATE DATABASE rest_api_slim_php;'
$ docker-compose exec mysql sh -c "mysql rest_api_slim_php < docker-entrypoint-initdb.d/database.sql"
```

Bajar los servicios

```sh
$ docker-compose down
```

Ver los servicios corriendo en el agente de DataDog

```sh
$ docker-compose exec -it datadog-agent agent status
```

Crear la tabla  para la base de datos en postgres he insertar usuarios 

```sh
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);
INSERT INTO users (name, email)
    VALUES ('joe', 'joe@ibm.com'),
    ('ryan', 'ryan@faztweb.com');
```

# Env

Dentro de /rest-api-slim-php

```sh
DB_HOST='127.0.0.1'
DB_NAME='rest_api_slim_php'
DB_USER='root'
DB_PASS=''
DB_PORT='3306'

DISPLAY_ERROR_DETAILS=true
APP_DOMAIN='http://localhost:8081'
SECRET_KEY='YourSuperSecret-KeY'

REDIS_ENABLED=true
REDIS_URL='tcp://redis:6379'
```

# Servicios
Para visualizar los diferentes servicios 

### PgAdmin4
user: pgadmin4@pgadmin.org
pass: pgadmin4@pgadmin.org
```sh
$ http://localhost:5050 
```

### PhpMyAdmin
user: root
pass: 
```sh
$ http://localhost:8888
```
Habilitar performance_schema
```sh
$ UPDATE performance_schema.setup_consumers SET enabled = 'YES' WHERE name = 'statements_digest';
```

### Postgres
user: postgres
pass: postgres
port: 5432

### Nginx
port: 3000
```sh
get: '/users'
get: '/users/:id'
post: '/users'
put: '/users/:id'
delete: '/users/:id'
```

### Nginxlatest
port: 8081
url-status: http://localhost:81/nginx_status
```sh
$ http://localhost:8081/
$ http://localhost:8081/docs/index.html#/
```

### Redis
port: 63790
Ver servicio de redis
```sh
$ docker-compose exec -it redis bash
$ redis-cli
$ keys *
```

### Mysql
port: 33060

### Documentación 
* [Redis en una API con PHP y Slim Video ](https://www.youtube.com/watch?v=qX_TVjxEZSc&feature=youtu.be&ab_channel=MauroBonfietti)
* [Redis en una API con PHP y Slim GitHub](https://github.com/maurobonfietti/rest-api-slim-php)
* [Nodejs & PosgreSQL Video ](https://www.youtube.com/watch?v=ap4C4384Cu8&ab_channel=FaztCode)
* [Nodejs & PosgreSQL GitHub](https://github.com/FaztWeb/nodejs-postgresql-intro)
* [Integrations-core GitHub](https://github.com/DataDog/integrations-core)
* [Tracing PHP DataDog](https://docs.datadoghq.com/tracing/setup_overview/setup/php/?tab=containers)
* [Tracing Node.js DataDog](https://docs.datadoghq.com/tracing/setup_overview/setup/nodejs/?tab=containers)