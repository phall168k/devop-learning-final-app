[![Deploy on main branch](https://github.com/phall168k/devop-learning-final-app/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/phall168k/devop-learning-final-app/actions/workflows/deploy-prod.yml)

Dev OP Learning Finall App

## Backend development with Docker

Start the development services (the backend includes TypeScript tooling):

```sh
docker compose --env-file .env.dev -f docker-compose.dev.yml up --build -d
```

Run database commands inside the backend container so they use Compose's database connection:

```sh
docker compose --env-file .env.dev -f docker-compose.dev.yml exec backend-dev npm run migration:run
docker compose --env-file .env.dev -f docker-compose.dev.yml exec backend-dev npm run seed
```

Generate a migration by passing its output path as a positional argument:

```sh
docker compose --env-file .env.dev -f docker-compose.dev.yml exec backend-dev npm run migration:generate -- src/database/migrations/admin/AddCategory
```

Copy generated migration files back to your checkout before recreating the container:

```sh
docker compose --env-file .env.dev -f docker-compose.dev.yml cp backend-dev:/app/src/database/migrations/admin/. backend/src/database/migrations/admin/
```

Database scripts run explicitly; starting Compose starts the application. `seed` builds first and runs the compiled main seeder. `migration:fresh` drops the database schema before migrating and seeding, so use it only when you intend to delete existing data.
