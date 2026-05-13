# Learning about SASS

## 1 - Setup NODE environment

* Setup devcontainer for development environment.

    * Press CMD + Shift + P to open Command list.
    * Input command: Dev Containers: Open Folder in Container.
    * Config environment NODE for Dev Container

* Install SASS for Dev Container.

```shell
npm i sass --save
```

## 2 - Build SASS code into CSS

* Build file

```shell
sass -watch input.sass output.css
```

* Build folder

```shell
sass --watch app/sass:public/stylesheets
```