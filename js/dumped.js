var queryParamName = 'q';
if (urlParams[queryParamName]) {
  //customSearchControl.execute(urlParams[queryParamName]);
  alert("passed");
}

function parseParamsFromUrl() {
  var params = {};
  var parts = window.location.search.substr(1).split('&');
  for (var i = 0; i < parts.length; i++) {
    var keyValuePair = parts[i].split('=');
    var key = decodeURIComponent(keyValuePair[0]);
    params[key] = keyValuePair[1] ?
        decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')) :
        keyValuePair[1];
  }
  return params;
}
var urlParams = parseParamsFromUrl();
