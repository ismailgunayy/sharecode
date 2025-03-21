# ShareCode

A collaborative code sharing application that allows developers to create and share code snippets in real-time.

Built with:

- Next.js
- Socket.IO

### Getting Started

```bash
# Clone the repository
git clone https://github.com/ismailgunayy/sharecode

# Run the server:
cd sharecode/server
yarn
yarn dev

# Run the client:
cd sharecode/client
yarn install
yarn dev
```

### TODO:

- [x] Set up the server and client
- [x] Set up the first connection
- [ ] Implement the realtime update mechanism
  - Try with an input element at first
- [ ] Implement the code editor [CodeMirror](https://github.com/uiwjs/react-codemirror) or [highlight.js](https://highlightjs.org/#usage)
- [ ] Implement the rooms
  - Rooms can be shared via link
  - Keep the
- [ ] Rooms should persist for 24h (maybe ?Redis?)
