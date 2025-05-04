#### Features:

- [x] Set up the server and client
- [x] Set up the first connection
- [x] Implement the realtime update mechanism
  - Try with an input element at first
- [x] Implement the code editor with [react-ace](https://securingsincity.github.io/react-ace/) (Migrated to [Codemirror](https://uiwjs.github.io/react-codemirror/) later)
- [x] Implement sessions
  - Users should be able to share the session via links
- [x] Add a 'copy to share' button to copy URL (For UX purposes)
- [ ] Keep user's preferred theme in local storage
- [ ] List recent sessions on homepage
- [ ] Sessions will expire after 24 hours
- [ ] Users should be able to see each other's caret positions
  - Codemirror is able to render a tooltip on a custom position
  - Do further research about highlighting texts by other users
- [ ] Import/export code as a file
  - [ ] While importing, file extension is checked and editor language is set accordingly
- [ ] Users in the session are listed
  - Users are asked a username while joining the session
- [ ] Set the UI theme according the editor theme

#### Bugs:

- [ ] Serverless not working properly
  - Only redis sleeps after 10 minutes of inactivity, client and server are always up
- [x] Language choice should be binded to the session
  - If one of the users change the language, all editors should be synced
- [x] In editor, text is not wrapping and shifting sidebar, editor should have a max-width
- [x] CORS

#### Improvements/Refactors:

- [ ] Implement lazy loading for themes and languages
- [ ] Add request timeout for client, render a toast accordingly
- [ ] Add a shared types library (Socket events, languages, themes)
- [ ] Add unit, integration, e2e tests (Just to practice)
- [ ] Global state management
- [ ] Add logger (?[Winston](https://github.com/winstonjs/winston)?)
- [ ] ?Add custom error handler?
- [ ] Optimise Dockerfiles and compose files (both prod and dev)
- [x] Optimise GitHub workflows
- [x] Use socket.io rooms to implement sessions
