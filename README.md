# MAG Dressage

Website for MAG Dressage LLC, a boutique dressage training facility in North Salem, NY.

**https://magdressage.com**

## Development

```sh
npm install
npm run dev
```

## Commands

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `npm run dev`     | Start dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`    |
| `npm run preview` | Preview build locally before deploy   |

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── resources/          # Business context docs (not deployed)
├── src/
│   └── pages/
│       └── index.astro
├── CLAUDE.md           # AI assistant context
└── package.json
```

Built with [Astro](https://astro.build).
