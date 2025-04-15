<div align="left">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?logo=mit" alt="License" />
    <img src="https://img.shields.io/badge/Deployment-Railway-blueviolet" alt="License" />
    <img src="https://img.shields.io/badge/node-v22.14.0-44883e?logo=nodedotjs" alt="Node Version" />
</div>

# ShareCode

A collaborative code sharing platform that allows developers to share their codes in real-time.

> ## **[🚀 Try it live now ](https://sharecode.up.railway.app)**

### Features

- Real-time code sharing with Socket.IO
- Shareable session links for easy collaboration
- Code editor with syntax highlighting, powered by Codemirror
- Minimalist, clean interface built with TailwindCSS
- Redis-backed session storage

### Tech Stack

This is a monorepo created with [TurboRepo](https://turbo.build/repo/docs), deployed to [Railway](https://railway.app)

#### Frontend

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Socket.IO-Client](https://socket.io/docs/v4/client-api/)
- [Codemirror](https://uiwjs.github.io/react-codemirror/)
- [TailwindCSS](https://tailwindcss.com/)

#### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Redis](https://redis.io/)

### Getting Started

#### Requirements

- Node.js v22.14.0
- Yarn
- Docker & Docker Compose (optional)

#### Local Development

First, see apps' own READMEs for local files, then;

```bash
# If you don't have yarn
corepack enable

# Install dependencies
yarn

# Start development
yarn dev
```

##### Docker

```bash
# Start the development environment
docker compose -f docker-compose.dev.yml up
```

This will start:

- Client -> `http://localhost:3023`
- Server -> `http://localhost:8023`
- WebSocket -> `ws://localhost:8023`
- Redis -> `redis://localhost:6379`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
