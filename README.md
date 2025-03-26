# ShareCode (Work in Progress)

A collaborative code sharing application that allows developers to create and share their codes in real-time.

## Features

- Real-time code synchronization
- Shareable session links
- Minimalist, clean interface

## Tech Stack

This is a monorepo created with [TurboRepo](https://turbo.build/repo/docs)

- **Frontend**: Next.js, React, TailwindCSS, Socket.io-client
- **Backend**: Node.js, Socket.io

## Requirements

- Node.js v22.12.0
- Yarn v1.22.22

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/sharecode.git
cd sharecode

# If you don't have yarn 1.22
corepack enable

# Install dependencies
yarn

# Start development servers
yarn dev
```

This will start:

- Client http://localhost:3023
- Server ws://localhost:8023

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
