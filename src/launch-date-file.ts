import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.35-alpha/deno-dom-wasm.ts";

const LAUNCH_DATE_FILE_PATH = "./local/msrs-launch-date.txt";

export async function getLaunchDateStatus(): Promise<string> {
  const currentLaunchDate = await readWebsiteLaunchDate();
  const launchDateText = "Current Launch Date = " + currentLaunchDate;
  console.log(launchDateText);
  return launchDateText;
}

function readStoredLaunchDate(): string {
  let launchDate = "";

  try {
    launchDate = Deno.readTextFileSync(LAUNCH_DATE_FILE_PATH);
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      console.log("No msrs-launch-date.txt file found");
    }
  }

  return launchDate;
}

async function readWebsiteLaunchDate(): Promise<string> {
  const url = "https://midsouthrockets.com/home/launchcalendar/";
  const res = await fetch(url);
  const html = await res.text();
  const document = new DOMParser().parseFromString(html, "text/html");

  const launchDate = document?.querySelector("tr")?.textContent
    .replaceAll("\n", " ")
    .replaceAll("*", "")
    .trim()
    .replaceAll("\u00a0", "")
    .replace(/\s\s+/g, " ")
    .replace(/\s\s+/g, " ");

  if (launchDate) {
    Deno.writeTextFileSync(LAUNCH_DATE_FILE_PATH, launchDate);
  }

  return launchDate || "";
}

export function getHasDateChanged(
  storedDate: string,
  currentDate: string,
): boolean {
  return storedDate === currentDate;
}

export function getIsLaunchCanceled(currentDate: string): boolean {
  return currentDate.toUpperCase().includes("CANCELLED");
}
