### Features:

- [x] Set up the server and client
- [x] Set up the first connection
- [x] Implement the realtime update mechanism
  - Try with an input element at first
- [x] Implement the code editor with [react-ace](https://securingsincity.github.io/react-ace/)
- [x] Implement sessions
  - Users should be able to share the session via links
- [x] Add a 'copy to share' button to copy URL (For UX purposes)
- [ ] List recent sessions on homepage
- [ ] Sessions will be accessible for 24 hours
- [ ] Users should be able to see each other's caret positions and selected texts
- [ ] Users in the session are listed
  - Users are asked a username while joining the session
- [ ] Set the UI theme according the editor theme
- [ ] Import/export code as a file
  - [ ] While importing, file extension is checked and editor language is set accordingly

##### Fix:

- [ ] Text is not wrapping and shifting sidebar, editor should have a max-width
- [ ] Language choice should be binded to the session
  - If one of the users change the language, all editors should be synced
- [x] CORS

##### Improvements/Refactors:

- [ ] Global state management
- [ ] Add logger (?[Winston](https://github.com/winstonjs/winston)?)
- [ ] ?Add custom error handler?
- [ ] Optimise Dockerfiles and compose files (both prod and dev)
- [x] Use socket.io rooms to implement sessions
