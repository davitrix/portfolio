#!/bin/bash

APP_PATH=/var/www/portfolio

echo "Actualizando el proyecto en $APP_PATH"

cd $APP_PATH

git checkout .
git pull
sudo chmod -R 775 $APP_PATH
sudo chown -R larasail:larasail $APP_PATH
npm install
npm run build

