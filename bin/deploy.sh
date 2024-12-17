#!/bin/sh

APP_ROOT="$(dirname "$(dirname "$(readlink -fm "$0")")")"

cd $APP_ROOT
npm run build
rsync -rv --delete --exclude README.md dist/* spmsn.github.io/
LAST_MESG=`git log -1 --pretty=%B | head -n 1`
cd spmsn.github.io && \
    git pull --rebase && \
    git add . && \
    git commit -m "$LAST_MESG" && \
    git push -u origin main
