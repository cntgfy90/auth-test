Server

## Installation

```bash
$ yarn install
```

## Start

Make sure to place correct env variables before start. Take a look at `.env.example` for that.

Run database from Docker compose file

```bash
$ docker-compose up
```

Run migrations

```bash
$ yarn typeorm:cli migration:run
```

```bash
$ yarn start:dev
```

## Tests

```bash
$ yarn test
```

