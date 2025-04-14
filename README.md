<div align="left">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?logo=mit" alt="License" />
    <img src="https://img.shields.io/badge/Deployment-Railway-blueviolet" alt="License" />
    <img src="https://img.shields.io/badge/node-v22.14.0-44883e?logo=nodedotjs" alt="Node Version" />
</div>

# ShareCode

A collaborative code sharing platform that allows developers to share their codes in real-time.

> ## **[🚀 Try it live now ](https://sharecode.up.railway.app)**

### Features

- Real-time code sharing with [Socket.IO](https://socket.io/)
- Shareable session links for easy collaboration
- Code editor with syntax highlighting, powered by [Codemirror](https://uiwjs.github.io/react-codemirror/)
- Minimalist, clean interface built with [TailwindCSS](https://tailwindcss.com/)
- [Redis](https://redis.io/)-backed session storage

### Tech Stack

This is a monorepo created with [TurboRepo](https://turbo.build/repo/docs), deployed to [Railway](https://railway.app)

#### Frontend

- Next.js
- React
- TailwindCSS
- Socket.IO-Client

#### Backend

- Node.js
- Express
- Socket.IO
- Redis

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
