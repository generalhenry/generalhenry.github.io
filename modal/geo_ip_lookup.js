(function () {
  // Prevent accidental calls to getServerComponent
  var BS_getServerComponent = Bootstrapper.getServerComponent;
  Bootstrapper.getServerComponent = function () {};

  // Set up constants for later
  var FIRST_GEO_COOKIE_NAME = 'ENSIGHTEN_REGION',
    THIRD_GEO_COOKIE_NAME = 'ENSIGHTEN_REGION',
    COOKIE_SERVER = (window.location + '').slice(0, 5) === 'https' ? '//b.ensighten.com:8443/' : '//b.ensighten.com:8080/';

  // Set up readCookie for Bootstrapper
  function readCookie (name) {
    var nameEQ = name + '=',
      ca = document.cookie.split(';'),
      c,
      i = 0,
      retVal = null;

    // Find all key-value pairs of cookies
    for(; i < ca.length; i++) {
      c = ca[i];

      // Trim off all preceding whitespace
      while (c.charAt(0) === ' ') {
        c = c.slice(1);
      }

      // If the name and equals sign is at the start, then return the value
      if (c.indexOf(nameEQ) === 0) {
        retVal = c.slice(nameEQ.length);
        break;
      }
    }

    // Return the cookie
    return retVal;
  }
  Bootstrapper.readCookie = readCookie;

  var region;

  // The normal next will set .getServerComponent (with geo)
  var setServerComponent = function () {
    Bootstrapper.getServerComponent = function () {
      var u = window.location.href,
        i,
        k,
        c,
        data = {'region': region};

      for (i in data) {
        c = ~u.indexOf("#") ? u.slice(u.indexOf("#"), u.length) : "";
        u = u.slice(0, c.length ? u.length - c.length : u.length);
        u = u + (~u.indexOf("?") ? "&" : "?");
        for (k in data) {
          u += k + "=" + data[k] + "&";
        }
        u = u.slice(0, -1) + c;
        break;
      }
      o = window.ensightenOptions;
      Bootstrapper.insertScript("//" + o.nexus + "/" + o.client + "/serverComponent.php?clientID=" + o.clientId + "&PageID=" + encodeURIComponent(u));
    };
  };

  // Otherwise, try first party cookie
  region = readCookie(FIRST_GEO_COOKIE_NAME);

  // If the region is unknown
  if (!region) {
    // Get the region from Offsite via JSON-P
    var callbackName = 'PrivacyCallback' + (+new Date());
    Bootstrapper[callbackName] = function (cookies) {
      region = cookies[THIRD_GEO_COOKIE_NAME];

      // If there is no region, report an error and fallback to 'A1'
      if (!region) {
        var err = new Error('No region returned by Offsite');

        Bootstrapper.reportException(err);
        region = 'A1';
      }

      var expireDate = new Date(45e11),
        expireStr = expireDate.toUTCString(),
        cookieSuffix = '; path=/; expires=' + expireStr;

      // Save the region
      document.cookie = FIRST_GEO_COOKIE_NAME + '=' + region + cookieSuffix;

      // Set the server component and grab it (since the initial call was missed due to async)
      setServerComponent();
      Bootstrapper.getServerComponent();
    };

    Bootstrapper.insertScript(COOKIE_SERVER + 'go?callback=Bootstrapper.' + callbackName);
  } else {
    // Otherwise...
    setServerComponent();
  }
}());