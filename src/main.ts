import { app, get } from "https://denopkg.com/syumai/dinatra@master/mod.ts";

console.log("MSRS Update Notifier Started");

app(
  get(
    "/",
    () => "hello world",
  ),
);
