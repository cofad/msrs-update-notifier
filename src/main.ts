import { app, get } from "https://denopkg.com/syumai/dinatra@master/mod.ts";
import { readStoredLaunchDates } from "./launch-dates-file.ts";

console.log("MSRS Update Notifier Started");

const storedLaunchDates = readStoredLaunchDates();

console.log(storedLaunchDates);

app(
  get(
    "/",
    () => "hello world",
  ),
);
