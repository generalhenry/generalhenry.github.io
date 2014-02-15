function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return a.hostname;
}

function onBeforeRequest (req, node) {
  console.log('req', req);
  // check optin
  if (/ENSIGHTEN_PRIVACY_OPTIN=1/.test(document.cookie)) {
    console.log('opt');
    return true;
  }
  // check white list
  var destination = parseURL(req.destination);
  for (var i = 0; i < domains.length; i++) {
    if ( (new RegExp(domains[i])).test(destination) ) {
      console.log('domain', domains[i], destination);
      return true;
    }
  }
  console.log('fail');
  return false;
}

var domains = ["google-analytics.com","coremetrics.com","cmcore.com","unica.com","hitbox.com","2o7.net","omniture.com","offermatica.com","omtrdc.net","esomniture.com","webtrendslive.com","webtrends.com"];

domains.push(window.location.hostname);

Bootstrapper.onBeforeRequest = onBeforeRequest;
