# HTWG App - Frontend

Die [HTWG App](https://github.com/htwg-app/htwg-app-front) verbindet sich mit [dem Backend](https://github.com/htwg-app/htwg-app-back), das auf `Heroku` eingesetzt wird.

[![DeepScan grade](https://deepscan.io/api/teams/16386/projects/19652/branches/513389/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16386&pid=19652&bid=513389) [![Depfu](https://badges.depfu.com/badges/52d12f581117f764415972538c569ced/overview.svg)](https://depfu.com/github/HTWG-App/htwg-app-front?project_id=33433)

## 1. Installation

Stelle zunächst sicher, dass `node` und `npm` installiert sind.

Installiere alle Pakete, die in `package.json` angegeben sind:

```shell
npm install
```


## 2. Entwicklung

### 2.1 Server starten

Um mit der Entwicklung des Backends zu beginnen, musst du einen Server starten. Er kann mit dem folgenden Befehl gestartet werden:

```shell
npm run serve
```

Dadurch wird ein Server unter `localhost:8080` gestartet.

### 2.2 Lints und Korrekturen

```shell
npm run lint
```

### 2.3 Build für die Produktion

Dies geschieht automatisch bei einem Push zum Repository. Es wird dann über GitHub Action auf GitHub Pages bereitgestellt.
```shell
npm run build
```
