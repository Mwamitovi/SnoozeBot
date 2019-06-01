
exports.getApp = function(metadata) {
  const mailboxId = metadata.mailbox.id;
  const conversationId = metadata.ticket.id;
  let appHtml = "";
  // appHtml = "<ul><li>" + mailboxId + "</li><li>" + conversationId + "</li></ul>";
  appHtml += getLoginApp();
  return JSON.stringify({"html": appHtml});
}

function getLoginApp() {
  let appLink = 'https://secure.helpscout.net/authentication/authorizeClientApplication?client_id=996e6c5aeffa4c58b3fd4028fcd262bb';

  let appHtml = '<a href="' + appLink + '" class="c-button c-button--sidebar">Connect SnoozeBot</a>';

  // spacer
  appHtml += '<div class="c-sb-section__title">&nbsp;</div>';

  appHtml += '<div class="c-sb-section__title">What is SnoozeBot?</div>';
  appHtml += 'SnoozeBot will let you "snooze" conversations for different periods of time. ';
  appHtml += 'The conversation will be moved to "Pending" until the length of time you specified passes. ';
  appHtml += 'When that happens, the bot will re-open the conversation and add a quick note.';

  return appHtml;
}