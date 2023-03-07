/**
 * @OnlyCurrentDoc
 */
function chatgpt3(word) {
  
  var APIurl = "https://api.openai.com/v1/chat/completions"
  //var APIkey = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Readme').getRange('D4').getValues();
  var APIkey = "your OpenAI API key here";

 var data = {
  'model': 'gpt-3.5-turbo',
  'messages': [
    {'role': 'system', 'content': 'You are an assistant that know anything'},
    {'role': 'user', 'content': word}
  ]
};

 var options = {
    'method' : 'post'
    , 'headers': {
      'Content-Type':'application/json',      
      'Authorization' : 'Bearer '+APIkey}
    ,'muteHttpExceptions': true,
    'payload' : JSON.stringify(data)
    
    };

var response = UrlFetchApp.fetch(APIurl,options);
var json = response.getContentText();
var data = JSON.parse(json);
//Logger.log(data);
var returnval = data.choices[0].message.content;
//Logger.log(APIkey);

return returnval;


  };
