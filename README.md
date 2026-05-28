# SEA-ACN — Open Data for Anti-Corruption

Web portal for the SEA-CAN open data movement. Surfaces anti-corruption datasets, PEPs guidance, and related resources. Content pulled from Google Sheets at build/runtime.

## Deployments

| Name         | URL                                    | Host/Pipeline    |
| ------------ | -------------------------------------- | ---------------- |
| Production   | https://opendataforanticorruption.com/ | Client           |
| Staging      | https://opendataforanticorruption.com/ | Cloudflare Pages |

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [sheethuahua](https://www.npmjs.com/package/sheethuahua) — Google Sheets data source
- [ESLint](https://eslint.org/) (`eslint-config-next`)

## Environment Variables (if used)

No env vars required. Dataset and related resources read from public [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1g3dyZUDldmPnIgGik5k2SlfIcGJuOtP4i2PlDEvKSeA) via `sheethuahua`.

## Usages

Requirements: Node.js 20+ (CI uses 24), [pnpm](https://pnpm.io/) (preferred) or npm.

### Local dev server

Install packages

```sh
pnpm install
```

Run dev Command

```sh
pnpm dev
```

### Build

Static site export to `./out`:

```sh
pnpm build
```

Preview production build locally:

```sh
pnpm start
```

Lint:

```sh
pnpm lint
```

### Run other scripts (if exist)

## Related resources
- Figma https://www.figma.com/design/XBqOlRwLyIwDicFmbP8wKW/SEA-ACN?t=2FhrEyWIllvWdLJn-0
- Spreadsheet / CoLab / Google Drive https://docs.google.com/document/d/1zpbyu0QVQuUPXEzqmTaOxVxXvFbb6JKecl5FoD5YDdM/edit?tab=t.apza394okl1o


## License (Only public repo)
The team intends to develop every project as Open Source under the [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) terms. This means you can use, modify, and build upon the work, but it cannot be used for commercial purposes or to seek profit from the work. You must provide notice and credit to the work's owner, and the resulting work must be under the same Creative Commons license conditions as the original. WeVis Ltd. and Punch Up Ltd. are joint licensors.