# Files to modify for local version

## ./gulp/package.json

Need NodeJs 16. Add this to package.json to run with more modern nodejs

```json
"scripts": {
        "gulp": "set NODE_OPTIONS=--openssl-legacy-provider && gulp"
},
```

## steam_sso.js

Let the game think it's authenticated with steam. This is needed to run the game locally.

```js
export let WEB_STEAM_SSO_AUTHENTICATED = true;
```

# Building prerequisites

https://github.com/Hyperion-21/shapez.io/tree/95a00e4b712fd607ff8cb0395bfeec0b4d9c381d

-   Make sure `ffmpeg` is on your path
-   Install Java (required for texture packer)

# Building

In repo root:

```sh
yarn
```

In ./electron:

```sh
yarn --ignore-optional
```

In ./gulp:

```sh
yarn
yarn gulp
yarn gulp build.standalone-steam
yarn gulp standalone.standalone-steam.prepare
```

Then choose one:

-   Linux: `yarn gulp standalone.standalone-steam.package.linux64`
-   Windows: `yarn gulp standalone.standalone-steam.package.win64`
-   Mac: `yarn gulp standalone.standalone-steam.package.darwin64`
-

Open file:
build_output\standalone-steam\shapez-win32-x64\shapezio.exe

# Useful files

hub_goals.js -> in constructor set levels

---

---

---

---

**Notice**: This will produce a debug build with several debugging flags enabled. If you want to disable them, modify [`src/js/core/config.js`](src/js/core/config.js).

## Creating Mods

Mods can be found [here](https://shapez.mod.io). The documentation for creating mods can be found [here](mod_examples/), including a bunch of sample mods.

## Build Online with one-click setup

You can use [Gitpod](https://www.gitpod.io/) (an Online Open Source VS Code-like IDE which is free for Open Source) for working on issues and making PRs to this project. With a single click it will start a workspace and automatically:

-   clone the `shapez.io` repo.
-   install all of the dependencies.
-   start `gulp` in `gulp/` directory.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tobspr-games/shapez.io)

## Helping translate

Please checkout the [Translations readme](translations/).

## Contributing

I will only accept pull requests which add a benefit to a large portion of the player base. If the feature is useful but only to a fraction of players, or is controversial, I recommend making a mod instead.

If you want to add a new feature or in generally contribute I recommend to get in touch on Discord in advance, which largely increases the chance of the PR to get merged:

<a href="https://discord.com/invite/HN7EVzV" target="_blank">
<img src="https://i.imgur.com/SoawBhW.png" alt="discord logo" width="100">
</a>

### Code

The game is based on a custom engine which itself is based on the YORG.io 3 game engine (Actually it shares almost the same core).
The code within the engine is relatively clean with some code for the actual game on top being hacky.

This project is based on ES5 (If I would develop it again, I would definitely use TypeScript). Some ES2015 features are used but most of them are too slow, especially when polyfilled. For example, `Array.prototype.forEach` is only used within non-critical loops since its slower than a plain for loop.

### Assets

You can find most assets <a href="//github.com/tobspr-games/shapez.io-artwork" target="_blank">here</a>.

All assets will be automatically rebuilt into the atlas once changed (Thanks to dengr1065!)

<img src="https://i.imgur.com/W25Fkl0.png" alt="shapez Screenshot">

<br>

## Check out our other games!

<a href="https://tobspr.io" title="tobspr Games">
<img src="https://i.imgur.com/uA2wcUy.png" alt="tobspr Games">
</a>
