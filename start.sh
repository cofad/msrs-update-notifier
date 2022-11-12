#!/bin/bash
deno run \
  --allow-env=GMAIL_PASSWORD \
  --allow-net=:8080,smtp.gmail.com:465,midsouthrockets.com \
  --allow-read=local/msrs-launch-date.txt \
  --allow-write=local/msrs-launch-date.txt \
  --watch \
  --check \
  ./src/main.ts
