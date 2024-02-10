This is a simple game where you can challenge someone (or a computer) in a short colorful battle.
You can play it freely [here](https://pikil.github.io/quinque).

Visit our [discord server](https://discord.com/channels/1205689011583066143) if you have an idea/suggestion/question/etc.

## Dev version

You can start a dev version with:

```bash
npm run dev
```

## Built version

You can build a production version with:

```bash
npm run build
```

Note that this version is built for Github pages, so it is a bit limited in functionality and has `/quinque` prefix for all the links (You can change that in `svelte.config.js`).

After you built the app, you can host it by just inserting the files to any web server. To utilize the offline mode, rename two files `not-service-worker.js` and `not-manifest.js` to `service-worker.js` and `manifest.js` respectively.

Thanks to [Nour Saud](https://codepen.io/nourabusoud/pen/ypZzMMs) for the Bubble effect!

Contributions or suggestions are also welcome!!!
