#!/bin/bash
deno run \
  --allow-env=GMAIL_PASSWORD \
  --allow-net=:8080,smtp.gmail.com:465 \
  --watch \
  --check \
  ./src/main.ts
