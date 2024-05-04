/**
 * Sets up the webhook for the Telegram bot to communicate with this Apps Script project.
 * This function should be run manually after deploying the web app.
 * Ensure the 'doPost' function in your project correctly handles incoming webhook requests and includes parameter 'e'.
 * 
 */
function SettingWebHook() {
  const botToken = '6950599698:AAHiSQQzDw2OlS7AuRX5SUL9qXssOCqcQoE'; // Replace <your-bot-token> with your actual bot token
  const webhookUrl = 'https://script.google.com/macros/s/AKfycbwAVH7EU4KH3SWy9_wWBNbS7hVrtwtodSVrCWZUuvVbNo-HEXYQYrCp_rEaAniM64AK/exec'; // Replace <your-web-app-url> with the URL of your deployed web app

  /** @type {telesun} */
  const telesun = new Telesun.config({ telegram: botToken });
  telesun.setWebhook({ url: webhookUrl });
}

/**
 * Deletes the current webhook, effectively stopping the Telegram bot from sending updates to this Apps Script project.
 * This function is useful for transitioning from production to development mode, where you might prefer polling or manual testing.
 *
 */
function deletewebHook() {
  const botToken = '<your-bot-token>'; // Replace <your-bot-token> with your actual bot token
  new Telesun.config({ telegram: botToken }).deleteWebhook();
}
