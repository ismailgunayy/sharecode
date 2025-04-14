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
- Code editor with syntax highlighting and auto-completion
- Minimalist, clean interface built with TailwindCSS
- Redis-backed session storage

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
- Yarn v1.22.22
- Docker & Docker Compose (optional)

#### Local Development

> First, see apps' own READMEs for local files

```bash
# Clone the repository
git clone https://github.com/yourusername/sharecode.git
cd sharecode

# If you don't have yarn 1.22
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
