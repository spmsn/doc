#!/bin/sh

APP_ROOT="$(dirname "$(dirname "$(readlink -fm "$0")")")"

cd $APP_ROOT && npm run build
LAST_MESG=`git log -1 --pretty=%B | head -n 1`
cd dist && git pull --rebase && git add . && git commit -m "$LAST_MESG" && git push -u origin main
