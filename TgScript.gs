var apiToken = "[INSERT YOUR TELEGRAM API TOKEN]";
var tgUrl = "https://api.telegram.org/bot" + apiToken + "/";
var webAppUrl = "[INSERT LINK OF THE GOOGLE SCRIPT WEB APP]";


function setWebhook() {
  var commands ={'url': webAppUrl};
  sendRequest('setWebhook', commands);
}


function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  if (data.message != null){
    var text = data.message.text;
    var chatId = data.message.chat.id;
    var messageId = data.message.message_id;
    sendInlineMessage(chatId, text);
    deleteMessage(chatId, messageId);
  }else{
    var chatId = data.callback_query.message.chat.id;
    var messageId = data.callback_query.message.message_id;
    deleteMessage(chatId, messageId);
  };
}


function sendInlineMessage(chatId,text) {
  const buttons = [[
      {
        text: '✅',
        callback_data: 'done'
      },]];
  var commands = {
   'chat_id': chatId,
   'reply_markup':{'inline_keyboard': buttons},
  };
  return sendRequest('sendMessage?&text=' + encodeURIComponent(text), commands);
}


function deleteMessage(chatId, messageId){
  var commands = {
   'chat_id': chatId,
   'message_id': messageId
  };
  sendRequest('deleteMessage', commands);  
}


function sendRequest(request, commands){
    var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(commands),
    'muteHttpExceptions': true
  };
  var response = UrlFetchApp.fetch(tgUrl + request, options);
  var result = JSON.parse(response.getContentText());
  if (response.getResponseCode() == 200) {
    if (result['ok']) {
      Logger.log('Sent successfully: '+ response.getContentText());
    } else {
      Logger.log('Error: ' + result['description']);
    }
  } else {
    Logger.log('Error: ' + response.getContentText());
  }
  return result;
}