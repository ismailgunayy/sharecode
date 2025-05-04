<div align="left">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?logo=mit" alt="License" />
    <img src="https://img.shields.io/badge/Deployment-Railway-blueviolet" alt="Railway" />
    <img src="https://img.shields.io/badge/node-v22.14.0-44883e?logo=nodedotjs" alt="Node Version" />
</div>

# ShareCode

A collaborative code sharing platform that allows developers to share their codes in real-time.

> ## **[🚀 Try it live now ](https://sharecode.up.railway.app)**

### Features

- Real-time code sharing with Socket.IO
- Shareable session links for easy collaboration
- Code editor with syntax highlighting, powered by Codemirror
- Minimalist, clean interface built with Tailwind
- Redis-backed session storage

> See [TODOS.md](./TODOS.md) for further features, bugs, and improvements.

### Tech Stack

This is a monorepo created with [TurboRepo](https://turbo.build/repo/docs)

#### Frontend

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Socket.IO-Client](https://socket.io/docs/v4/client-api/)
- [Codemirror](https://uiwjs.github.io/react-codemirror/)
- [Tailwind](https://tailwindcss.com/)

#### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Redis](https://redis.io/)

#### CI/CD

- [GitHub Actions](https://github.com/features/actions) workflows for client and server deployments
- Automated deployments to [Railway.app](https://railway.app)
- Type checking and linting on push to master

### Getting Started with Docker Setup

#### Requirements

- Node.js v22.14.0
- Yarn
- Docker

Create following files:

```bash
# apps/client/.env
API_URL=http://localhost:8023/api
WS_SERVER_URL=ws://localhost:8023
```

```bash
# apps/server/.env
NODE_ENV=development
PORT=8023
CLIENT_ORIGIN=http://localhost:3023

REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=password
CACHE_SERVICE_SLEEP_TIME_IN_MINUTES=10
```

```bash
# apps/server/redis.conf
requirepass password
port 6379
bind 0.0.0.0
```

#### Running the development environment

```bash
docker compose -f docker-compose.dev.yml up
```

Go to [http://localhost:3023](http://localhost:3023)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
