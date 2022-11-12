import { app, get } from "https://denopkg.com/syumai/dinatra@master/mod.ts";
import { getLaunchDateStatus } from "./launch-date-file.ts";

console.log("MSRS Update Notifier Started");

app(
  get("/", getLaunchDateStatus),
);
