import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

export async function sendEmail(): Promise<void> {
  const client = new SmtpClient();

  await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: "msrs.update.notifier@gmail.com",
    password: Deno.env.get("GMAIL_PASSWORD"),
  });

  await client.send({
    from: "msrs.update.notifier@gmail.com",
    to: "msrs.update.notifier@gmail.com",
    subject: "subject",
    content: "",
    html: "<div>hello<div>",
  });
}
