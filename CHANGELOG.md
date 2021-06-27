# Changelog

## 3.0.0
### breaking
- change absolute import

Changed path to import modules under the src directory. When you use `src/hooks/useCounter` in React component, for example:

```js
// before
import useCounter from '~/src/hooks/useCounter'
```

```js
// after
import useCounter from '@/hooks/useCounter'
```

### chore
- solve a storybook warning
- refactor: move style.css to assets
- fix command on commit

## 2.2.1
### chore
- add quiet option to start-storybook command

## 2.2.0
### feature
- update Next.js to v11
- update dependencies
- apply eslint-config-next
- add lint, tsc check to ci

## 2.1.0
### feature
- update tailwindcss module
- update Next.js, react, react-dom
- run husky on commit
- run jest on jsdom environment
- remove unused modules
- use storybook with webpack5

### fix
- use green color instead of teal which was removed from tailwindcss v2

## 2.0.2
- use yarn.lock instead of package-lock.json
- update README.md

## 2.0.1
- fix: remove unused github workflow

## 2.0.0
- breaking: update Next.js, React, Tailwind CSS etc.
- breaking: update tailwind.config.js and postcss.config.js

## 1.3.0
- simplify eslint settings
- apply typescript strict mode
- remove unused files

## 1.2.0
- improvement: update Next.js v10, React v17, Tailwind CSS v1.9
- improvement: apply absolute import
- refactor: simplify pre-commit hook

## 1.1.0
- improvement: update Next.js version to 9.5.4
- improvement: change _app.js and index.js to tsx file
- fix: remove bug from component script
- improvement: Remove unused component
- improvement: Fix Next.js version as 9.5.3

## 1.0.0
release
