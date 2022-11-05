#!/bin/bash
deno run \
  --allow-env=GMAIL_PASSWORD \
  --allow-net=:8080,smtp.gmail.com:465,midsouthrockets.com \
  --allow-read=local/msrs-launch-dates.txt \
  --watch \
  --check \
  ./src/main.ts
