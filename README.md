```
        .▄▄ ·       ▄▄▌  ▪  ▄▄▄▄▄▄• ▄▌·▄▄▄▄  ▄▄▄ .
        ▐█ ▀. ▪     ██•  ██ •██  █▪██▌██▪ ██ ▀▄.▀·
        ▄▀▀▀█▄ ▄█▀▄ ██▪  ▐█· ▐█.▪█▌▐█▌▐█· ▐█▌▐▀▀▪▄
        ▐█▄▪▐█▐█▌.▐▌▐█▌▐▌▐█▌ ▐█▌·▐█▄█▌██. ██ ▐█▄▄▌    
         ▀▀▀▀  ▀█▄▀▪.▀▀▀ ▀▀▀ ▀▀▀  ▀▀▀ ▀▀▀▀▀•  ▀▀▀ 

```

Solitude aims to be a note taking web application storing notes in git repositories.

### Development

```bash
npm install
npm run
```

Note: To deploy easily to github I am using `docs/` as my primary folder.

```bash
npm run build
# After building it copies the build folder to docs
```

### Flow

- Get the GitHub token.
- Show the maintained branch and the notes if exists.
- If branch doesn't exist ask to create one.
- Click on the existing note to edit on the markdown editor.
- Add functionality to create new notes.
- Save the notes after editing.

### Repository status

- The repository will always be in archived mode and only be active
while editing on solitude application.(Under review)
- All edits will be on master branch.
- If the master branch is not found, solitude-bot will create
one.(Under review).

### Repository file structure

- Notes/
  - Note 1/
    - static/
    - index.md
  - Note 2/
    - static/
    - index.md
- README.md 
