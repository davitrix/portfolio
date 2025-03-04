#!/bin/bash

APP_PATH=/var/www/portfolio

echo "Actualizando el proyecto en $APP_PATH"

cd $APP_PATH

git checkout .
git pull
npm install
npm run build

