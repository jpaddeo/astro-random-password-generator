# Random Passwords / Keys Generator
<div align="center">

![lookslike](/public/ss_password_generator.png)

</div>

## 📃 Description
Simple and intuitive app that allows you to generate random passwords / keys to use in your projects (as environment variables, auth keys, password, etc).

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── CheckCircleIcon.jsx
│   │   │   ├── ClipboardIcon.jsx
│   │   │   ├── index.jsx
│   │   │   ├── LockIcon.jsx
│   │   │   └── RefreshIcon.jsx
│   │   ├── partials/
│   │   │   ├── Actions.jsx
│   │   │   ├── CharOptions.jsx
│   │   │   ├── PasswordCard.jsx
│   │   │   └── Slider.jsx
│   │   ├── Generator.jsx
│   │   └── GeneratorOptions.jsx
│   ├── hooks/
│   │   ├── usePasswordGenerator.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
└── pnpm-lock.yaml
```

**NOTE:** Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro --help` | Get help using the Astro CLI                     |

