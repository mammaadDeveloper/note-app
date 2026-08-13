# NoteApp

A modern note-taking application built as an **Nx monorepo**, containing both the backend API and frontend web application in a single repository.

The project is designed around a shared Nx workspace, allowing the API and Web applications to be developed, tested, linted, built, and deployed independently or together.

## ✨ Features

* 📝 Note-taking application
* ⚡ Backend API
* 🌐 Web frontend
* 🏗️ Nx monorepo architecture
* 📦 Shared workspace and dependency management
* 🧪 Unit testing
* 🔍 Linting
* 🐳 Docker support
* 🚀 Production builds
* 🔄 Affected project commands with Nx
* 📊 Nx project graph
* 🔖 Automated versioning and releases
* 🪝 Git hooks with Husky
* 💬 Conventional commit workflow

---

## 🏗️ Architecture

NoteApp is organized as an Nx monorepo.

```text
NoteApp
│
├── apps/
│   ├── api/          # Backend API
│   └── web/          # Frontend application
│
├── docker-compose.yml
├── docker-compose.dev.yml
├── nx.json
├── package.json
├── bun.lock
└── ...
```

The two main applications are:

### API

The backend application responsible for:

* Application business logic
* Note management
* API endpoints
* Data processing
* Backend services

### Web

The frontend application responsible for:

* User interface
* Note management UI
* Communication with the API
* User interaction

Both applications are managed by **Nx** and live inside the same repository.

---

## 🧰 Tech Stack

| Area             | Technology              |
| ---------------- | ----------------------- |
| Monorepo         | Nx                      |
| Backend          | NestJS / Node.js        |
| Frontend         | Web application         |
| Package Manager  | Bun                     |
| Containerization | Docker                  |
| Orchestration    | Docker Compose          |
| Git Hooks        | Husky                   |
| Commits          | Commitizen / Commitlint |
| Versioning       | Standard Version        |

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* [Bun](https://bun.sh/)
* [Docker](https://www.docker.com/)
* Docker Compose
* Git

Verify your installation:

```bash
node --version
bun --version
docker --version
docker compose version
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd note-app
```

Install dependencies:

```bash
bun install
```

---

# 💻 Development

NoteApp uses Nx to manage both applications.

## Run the API

```bash
bun run api:serve
```

The API will start using the Nx development configuration.

## Run the Web application

```bash
bun run web:serve
```

## Run API and Web together

```bash
bun run serve
```

This command starts both applications in parallel:

```text
                Nx
                 │
        ┌────────┴────────┐
        │                 │
       API               Web
        │                 │
     Backend           Frontend
```

---

# 🏭 Production

## Build the API

```bash
bun run api:build:prod
```

## Build the Web application

```bash
bun run web:build:prod
```

## Build both applications

```bash
bun run build:prod
```

The production build uses Nx to build both applications in parallel.

---

# 🧪 Testing

## API tests

```bash
bun run api:test
```

Watch mode:

```bash
bun run api:test:watch
```

## Web tests

```bash
bun run web:test
```

Watch mode:

```bash
bun run web:test:watch
```

## Test both applications

```bash
bun run test
```

---

# 🔍 Linting

## API

```bash
bun run api:lint
```

## Web

```bash
bun run web:lint
```

## Lint both applications

```bash
bun run lint
```

---

# 🐳 Docker

NoteApp supports running the applications using Docker Compose.

The production Docker setup runs the API and Web applications as separate containers.

```text
                    Docker Compose
                         │
             ┌───────────┴───────────┐
             │                       │
        API Container           Web Container
             │                       │
          Backend                 Frontend
             │                       │
          :3000                    :4200
```

## Build Docker images

```bash
bun run docker:build
```

## Start containers

```bash
bun run docker:up
```

## Build and start

```bash
bun run docker:up:build
```

## Stop containers

```bash
bun run docker:down
```

## Restart containers

```bash
bun run docker:restart
```

## Check container status

```bash
bun run docker:ps
```

---

## Docker Logs

### All services

```bash
bun run docker:logs
```

### API

```bash
bun run docker:logs:api
```

### Web

```bash
bun run docker:logs:web
```

---

## Rebuild Docker Images

To completely rebuild images without using Docker's build cache:

```bash
bun run docker:rebuild
```

---

# 🛠️ Docker Development

A separate Docker Compose configuration is available for development.

Start the development environment:

```bash
bun run docker:dev
```

Stop the development environment:

```bash
bun run docker:dev:down
```

View development logs:

```bash
bun run docker:dev:logs
```

---

# 📊 Nx

Nx is responsible for managing the entire monorepo.

## View the project graph

```bash
bun run graph
```

This provides a visual representation of the projects and their dependencies.

## API graph

```bash
bun run api:graph
```

## Web graph

```bash
bun run web:graph
```

## Reset Nx

If the Nx cache or workspace state becomes inconsistent:

```bash
bun run nx:reset
```

---

# 🎯 Affected Commands

Nx can determine which projects are affected by changes.

This is especially useful in CI/CD environments and large monorepos.

## Affected builds

```bash
bun run affected:build
```

## Affected tests

```bash
bun run affected:test
```

## Affected lint

```bash
bun run affected:lint
```

Instead of rebuilding and testing the entire workspace, Nx can focus on projects affected by the current changes.

---

# 🧪 End-to-End Testing

## API E2E

```bash
bun run api:e2e
```

## Web E2E

```bash
bun run web:e2e
```

---

# 📁 Project Structure

A simplified project structure:

```text
note-app/
│
├── apps/
│   ├── api/
│   │   ├── src/
│   │   ├── project.json
│   │   └── Dockerfile
│   │
│   └── web/
│       ├── src/
│       ├── project.json
│       └── Dockerfile
│
├── docker-compose.yml
├── docker-compose.dev.yml
│
├── nx.json
├── package.json
├── bun.lock
├── tsconfig.json
├── tsconfig.base.json
│
└── README.md
```

---

# 🔀 Git Workflow

The project uses Git hooks and commit tooling to keep the repository history consistent.

Husky is responsible for managing Git hooks.

Commitizen is used to create standardized commits.

Create a commit using:

```bash
bun run commit
```

Commit messages are validated using Commitlint.

To manually validate the latest commit:

```bash
bun run lint:commit
```

---

# 🔖 Versioning & Releases

NoteApp uses `standard-version` for version management and changelog generation.

## Create a release

```bash
bun run release
```

## Minor release

```bash
bun run release:minor
```

## Major release

```bash
bun run release:major
```

The release process is intended to keep application versions and changelog history consistent.

---

# 🧹 Useful Commands

| Command                   | Description                     |
| ------------------------- | ------------------------------- |
| `bun run serve`           | Run API and Web                 |
| `bun run build`           | Build API and Web               |
| `bun run build:prod`      | Production build                |
| `bun run test`            | Test API and Web                |
| `bun run lint`            | Lint API and Web                |
| `bun run graph`           | Open Nx project graph           |
| `bun run nx:reset`        | Reset Nx state                  |
| `bun run docker:up`       | Start Docker services           |
| `bun run docker:down`     | Stop Docker services            |
| `bun run docker:logs`     | Show Docker logs                |
| `bun run docker:up:build` | Build and start Docker services |
| `bun run affected:build`  | Build affected projects         |
| `bun run affected:test`   | Test affected projects          |
| `bun run affected:lint`   | Lint affected projects          |

---

# 🤝 Contributing

Contributions are welcome.

Before submitting changes:

1. Create a feature branch.
2. Make your changes.
3. Run tests.
4. Run linting.
5. Verify the application locally.
6. Create a conventional commit.
7. Open a pull request.

Example:

```bash
git checkout -b feature/add-note-search
```

Then:

```bash
bun run test
bun run lint
```

Create the commit:

```bash
bun run commit
```

---

# 📄 License

This project is licensed under the **Apache License 2.0**.

You can use, modify, distribute, and reproduce this software in accordance with the terms of the license.

See the [LICENSE](LICENSE) file for the full license text.

Copyright © 2026 NoteApp Contributors

---

## 💡 Why Nx?

The main reason for using Nx is to keep the backend and frontend in a single, maintainable workspace while still allowing each application to be developed and deployed independently.

Instead of maintaining separate repositories:

```text
API Repository
      +
Web Repository
```

NoteApp uses:

```text
                 NoteApp
                    │
               Nx Workspace
              /            \
            API             Web
             │               │
          Backend         Frontend
```

This provides a single source of truth for the project while preserving clear boundaries between applications.

---

## 📚 Resources

* [Nx Documentation](https://nx.dev/)
* [Nx Concepts](https://nx.dev/concepts)
* [Nx Task Running](https://nx.dev/features/run-tasks)
* [Nx Plugins](https://nx.dev/concepts/nx-plugins)
* [Docker Documentation](https://docs.docker.com/)
* [Bun Documentation](https://bun.sh/docs)

---

Made with ❤️ using Nx.
