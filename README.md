# HTWG App - Frontend

The [HTWG App](https://github.com/htwg-app/htwg-app-front) connects to [the backend](https://github.com/htwg-app/htwg-app-back) which is deployed on `Heroku`.

[![DeepScan grade](https://deepscan.io/api/teams/16386/projects/19652/branches/513389/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16386&pid=19652&bid=513389) [![Depfu](https://badges.depfu.com/badges/52d12f581117f764415972538c569ced/overview.svg)](https://depfu.com/github/HTWG-App/htwg-app-front?project_id=33433)

## 1. Installation

First, make sure `node@14.18.2` and `npm@6.14.15` are installed.

Install all packages specified in `package.json`:

```shell
npm install
```


## 2. Development

### 2.1 Start Server

To start developing the backend you must start a server. It can be started with the following command:

```shell
npm run serve
```

This will start a server at `localhost:8080`.

### 2.2 Lints and fixes files

```shell
npm run lint
```

### 2.3 Build for production

This happens automatically on a push to the repository. It is then deployed via GitHub Action to GitHub Pages.
```shell
npm run build
```
