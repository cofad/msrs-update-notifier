type LaunchDates = Date[];

export function readStoredLaunchDates(): LaunchDates {
  let launchDates: LaunchDates = [];

  try {
    launchDates = JSON.parse(
      Deno.readTextFileSync("./local/msrs-launch-dates.txt"),
    );
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      launchDates = [];
    }
  }

  return launchDates;
}
