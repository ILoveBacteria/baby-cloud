# Baby Cloud

[![License: MIT](https://img.shields.io/github/license/ILoveBacteria/baby-cloud)](https://github.com/ILoveBacteria/baby-cloud/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/ILoveBacteria/baby-cloud)](https://github.com/ILoveBacteria/baby-cloud/issues)
[![Forks](https://img.shields.io/github/forks/ILoveBacteria/baby-cloud)](https://github.com/ILoveBacteria/baby-cloud/network/members)
[![Stars](https://img.shields.io/github/stars/ILoveBacteria/baby-cloud)]()
[![Watchers](https://img.shields.io/github/watchers/ILoveBacteria/baby-cloud)]()
[![Last commit](https://img.shields.io/github/last-commit/ILoveBacteria/baby-cloud)](https://github.com/ILoveBacteria/baby-cloud/commits/master)
![GitHub tag](https://img.shields.io/github/v/tag/ILoveBacteria/baby-cloud?color=lightblue&label=last+tag)
![GitHub release](https://img.shields.io/github/v/release/ILoveBacteria/baby-cloud?color=green)
![GitHub repo size](https://img.shields.io/github/repo-size/ILoveBacteria/baby-cloud)

[![banner](/assets/banner_README.jpg)]()

## Description

The project is a web application that allows users to transfer files between any device with ease.
It provides a simple and user-friendly interface that enables users to upload and download files quickly.

An important feature of this project is its compatibility with all devices.
Whether you're using a desktop computer, laptop, tablet, or smartphone, you can easily access the web application and
transfer files between devices.

A cool feature is you can access your computer files while you not at home *(not yet secure)*

## How to run this project

1. Clone this repo.
2. Run these commands to install dependencies
    ```shell
    pipenv install
    npm install
    ```
3. Build and pack the React web-app
    ```shell
    npm run build
    ```
4. Migrate and run the server
    ```shell
    pipenv run python manage.py makemigrations
    pipenv run python manage.py migrate
    pipenv run python manage.py runserver
    ```

## Goals

- [x] Explore files
- [x] Download file
- [x] Upload File
- [x] Login users
- [ ] Security
- [ ] Shortcuts for starting and shutting down the server
- [ ] UI improvements
- [ ] Code improvements

## Screenshots

[![screenshot](/assets/screenshot.png)]()

*project in development*
