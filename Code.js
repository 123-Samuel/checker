function doPost(e) {
  /** @type telesun */
  const telesun = new Telesun.config({
    telegram: "your-bot-token",
  });

  telesun
    .handleWebhook(e)
    .use(welcomeDeveloper)
    // .longPolling()
}

/** @param {ctx} ctx */
function welcomeDeveloper(ctx) {
  const first_name = ctx.update.message.from.first_name
  const last_name = ctx.update.message.from.last_name
  const username = ctx.update.message.from.username
  const id = ctx.update.message.from.id



  ctx.replyWithHtml(` 🎉 <b>Welcome</b>\n\n ` +
    `🆔 <b>ID Number</b>:<code> ${id}</code>\n` +
    `👤 <b>First Name</b>:<code> ${first_name} </code>\n` +
    `📛 <b>Last Name</b>:<code> ${last_name} </code>\n` +
    `👨‍💻 <b>User Name</b>:<code> ${username} </code>`)

}



