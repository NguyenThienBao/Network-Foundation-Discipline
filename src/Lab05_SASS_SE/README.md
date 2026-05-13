# Learning about SASS

## 1 - Setup NODE environment

* Setup devcontainer for development environment.

    * Press CMD + Shift + P to open Command list.
    * Input command: Dev Containers: Open Folder in Container.
    * Config environment NODE for Dev Container

* Install SASS for Dev Container.

```shell
npm i sass --save-dev
```

## 2 - Build SASS code into CSS

* Build file

```shell
npx sass -watch input.sass output.css
```

* Build folder

```shell
npx sass --watch app/sass:public/stylesheets
```