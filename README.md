Quinque (/ˈkwɪŋkweɪ/) is a simple game where you can challenge someone (or a computer) in a short colorful battle.

- Play it [here](https://pikil.github.io/quinque);

- [Rules](https://pikil.github.io/quinque/page/rules);

- [More about the game](https://pikil.github.io/quinque/page/about);


##
Visit our [discord server](https://discord.com/channels/1205689011583066143) if you have an idea/suggestion/question/etc.


## Dev version

The project uses [pnpm](https://pnpm.io) (npm and yarn installs are blocked). Copy `.env.example` to `.env.local`, fill in the Firebase details and run:

```bash
pnpm install
pnpm dev
```

Before pushing, run `pnpm lint` and `pnpm check`; CI runs both.

## Built version

You can build a production version by creating `.env.production` (Vite loads it for builds) and running the following command:

```bash
pnpm build
```

Note that this version is built to keep forever on GH pages, so it has `/quinque` prefix for all the links (You can change that with `kit.paths.base` in `svelte.config.js`, together with `start_url` in `static/manifest.json`).

After you've built the app, you can host it by just inserting the files to any web server. The game is a PWA: it can be installed, and games against the computer or on one device work offline. The service worker (`src/service-worker.js`) is only registered over HTTPS or on localhost.

Note, that if you host the game yourself, you'll need a firebase account to store the online room data.

Thanks to [Nour Saud](https://codepen.io/nourabusoud/pen/ypZzMMs) for the Bubble effect!

Contributions or suggestions are also welcome!!!
