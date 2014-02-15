/*
  dialog.js is called when region === GB (UK)
*/
(function () {
  // Fallback Bootstrapper
  var Bootstrapper = window.Bootstrapper || {};
  window.Bootstrapper = Bootstrapper;

  // Shim for console
  var console = window.console || {'log': function () {}};

  // Create HTML
  var container,
      outerOverlay,
      miniOverlay,
      body,
      contentHtml = [
        '<div id="ENS_dialog_content" style="padding: 24px 36px 0 36px;">',
          '<span id="ENS_dialog_close" style="cursor: pointer; position: absolute; top: 2px; right: 9px; color: #B9B9B9; text-shadow: 1px 1px white;">&#10006;</span>',
          '<h1 style="margin: 5px 0; text-align: center; font-size: 21px; font-family: Calibri, Arial, sans-serif;">EU Consumer Data Collection Consent</h1>',
          '<div style="width: 100%; border-top: 1px #656565 solid; height: 18px;"></div>',
          '<div id="ENS_dialog_text" style="background: #F9F9F9; padding: 0 16px; margin: 0 0 15px; border: 3px #D5DBDE solid; border-radius: 8px;">',
            '<p style="font-size: 12px; color: #373737; padding: 8px 0 3px;">This site uses cookies and other technologies to recognize your computer so we can customize and enhance your experience. We also work with other companies that use these technologies to customize the ads that you see here and on other sites.</p>',
            '<p style="font-size: 12px; color: #373737; padding: 3px 0 9px;">EU law requires that we provide you with a choice about the use of these technologies. Without your consent, you will not have the best experience on this site, and you will see less relevant advertising.</p>',
          '</div>',
          '<div id="ENS_dialog_buttons" style="text-align: center; margin: 0 0 15px; ">',
            '<span id="ENS_dialog_btn_notConsent" style="display: inline-block; cursor: pointer; width: 120px; padding: 6px 0; margin: 0 3px; color: #AAA; border: 1px #C8C8C8 solid; border-radius: 3px; background: #ffffff; background: -moz-linear-gradient(top,  #ffffff 0%, #e8e8e8 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e8e8e8)); background: -webkit-linear-gradient(top,  #ffffff 0%,#e8e8e8 100%); background: -o-linear-gradient(top,  #ffffff 0%,#e8e8e8 100%); background: -ms-linear-gradient(top,  #ffffff 0%,#e8e8e8 100%); background: linear-gradient(top,  #ffffff 0%,#e8e8e8 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#e8e8e8\',GradientType=0 );">I Do Not Consent</span>',
            '<span id="ENS_dialog_btn_consent" style="display: inline-block; cursor: pointer; width: 120px; padding: 6px 0; margin: 0 3px; color: #4F93CC; border: 1px #C8C8C8 solid; border-radius: 3px; background: #ffffff; background: -moz-linear-gradient(top,  #ffffff 0%, #e3f3fe 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e3f3fe)); background: -webkit-linear-gradient(top,  #ffffff 0%,#e3f3fe 100%); background: -o-linear-gradient(top,  #ffffff 0%,#e3f3fe 100%); background: -ms-linear-gradient(top,  #ffffff 0%,#e3f3fe 100%); background: linear-gradient(top,  #ffffff 0%,#e3f3fe 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffff\', endColorstr=\'#e3f3fe\',GradientType=0);">I Consent</span>',
          '</div>',
          '<div id="ENS_dialog_info" style="background: #ECF1F1; color: #808080; margin: 0 0 16px; border: 1px #DDE5E6 solid; border-radius: 2px;">',
            '<div style="font-size: 12px; text-align: center; margin: 4px 0;">',
              'To see a list of the other companies using cookies on this site, ',
              '<a href="#" id="ENS_dialog_cookies" style="color: #4F93CC" target="_blank">',
                'click here',
              '</a>',
            '</div>',
            '<div style="font-size: 12px; text-align: center; margin: 4px 0;">',
              'To learn more about how cookies work, ',
              '<a href="#" style="color: #4F93CC" target="_blank">',
                'click here',
              '</a>',
            '</div>',
          '</div>',
        '</div>',
        '<div style="height: 10px; width: 100%; background: #F7F7F7; background: -moz-linear-gradient(top,  #F7F7F7 0%, #DDD 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#F7F7F7), color-stop(100%,#DDD)); background: -webkit-linear-gradient(top,  #F7F7F7 0%,#DDD 100%); background: -o-linear-gradient(top,  #F7F7F7 0%,#DDD 100%); background: -ms-linear-gradient(top,  #F7F7F7 0%,#DDD 100%); background: linear-gradient(top,  #F7F7F7 0%,#DDD 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#F7F7F7\', endColorstr=\'#DDD\',GradientType=0 );"></div>',
        '<div id="ENS_dialog_footer" style="background: #FFF; height: 36px;">',
          '<img src="//nexus.ensighten.com/ensighten/privacy/powered_by_logo.jpg" style="float: right; margin: 0 16px 0 0;" alt="Powered by Ensighten privacyEU" />',
        '</div>'
      ].join('');

  // Replace {{}} with data
  function templateReplacer (template, data) {
    return template.replace((RegExp("{{\\s*([a-z0-9_][.a-z0-9_]*)\\s*}}", "gi")), function (tag, k) {
      var p = k.split("."),
          len = p.length,
          temp = data,
          i = 0;
        for (; i < len; i++) {
          temp = temp[p[i]];
        }
      return temp;
    });
  }

  // Create content-container div
  container = document.createElement("div");

  // Create and style the outer background
  outerOverlay = document.createElement("div");
  outerOverlay.id = 'ENSIGHTEN_bg';
  outerOverlay.style.cssText = [
    'z-index: 9001;',
    'position: fixed;',
    'top: 0; left: 0;',
    'width: 100%; height: 100%;',
    'background-color: #FFF;',
    '-moz-opacity: 0.30;',
    '-khtml-opacity: 0.30;',
    'opacity: 0.30;',
    '-ms-filter:"progid:DXImageTransform.Microsoft.Alpha"(Opacity=30);',
    'filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);',
    'filter:alpha(opacity=30);'
  ].join('');

  // Style the content
  container.style.cssText = [
    'z-index: 9002;',
    'position: fixed;',
    'top: 100px; left: 50%;',
    'width: 487px;',
    'margin: 0 0 0 -244px;',
    'background-color: #F7F7F7;',
    'font-family: Calibri, Arial, sans-serif;',
    'border: 1px solid #DDD;',
    '-webkit-box-shadow: 3px 2px 15px -3px #000;',
    'box-shadow: 3px 2px 15px -3px #000;',
    'border-radius: 4px'
  ].join('');

  /****** // The Mini-overlay // ******/
  miniOverlay = document.createElement('div');
  miniOverlay.style.cssText = [
    'z-index: 9002;',
    'position: fixed;',
    'bottom: 20px; right: 25px;',
    'width: 170px;',
    'margin: 0;',
    'padding: 10px 12px 10px 10px;',
    'opacity: 0.7;',
    'background-color: #F7F7F7;',
    'border: 1px solid #222;',
    'font-family: Calibri, Arial, sans-serif;',
    '-webkit-box-shadow: 3px 2px 15px -4px #000;',
    'box-shadow: 3px 2px 15px -4px #000;',
    'border-radius: 2px'
  ].join('');

  miniOverlay.innerHTML = [
  '<div id="ENS_mini">',
    '<span id="ENS_mini_close" style="cursor: pointer; position: absolute; top: 3px; right: 8px; color: #BBB";>&#10006;</span>', // &times;
    '<p id="ENS_mini_settingsBtn" style="cursor: pointer; margin: 0; font-size: 14px;">Change Privacy Settings</p>',
  '</div>'
  ].join('');

  /* Event handling */
  function MicroEvent(){}MicroEvent.prototype={on:function(a,b){this._events=this._events||{};this._events[a]=this._events[a]||[];this._events[a].push(b)},off:function(a,b){this._events=this._events||{};!1!==a in this._events&&this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a){this._events=this._events||{};if(!1!==a in this._events)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}}; MicroEvent.mixin=function(a){for(var b=["on","off","trigger"],a=a.prototype||a,c=0;c<b.length;c++)a[b[c]]=MicroEvent.prototype[b[c]]};"undefined"!==typeof module&&"exports"in module&&(module.exports=MicroEvent);

  var CookieReader = {
    'readAll': function () {
      var cookies = document.cookie.split(';');
      console.log(cookies);
    }
  };

  /** Cookie logic **/
  var ENSCookie = {
    'exists': function () {
      return (this.read() !== null);
    },
    'read': function () {
      var nameEQ = "ENSIGHTEN_PRIVACY_OPTIN=",
        ca = document.cookie.split(';'),
        c,
        i = 0;

      for(; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    },
    'save': function (isConsenting) {
      var date = new Date(45e11),
        cookie = ['ENSIGHTEN_PRIVACY_OPTIN=', (isConsenting ? 1 : 0), '; path=/; expires=', date.toUTCString()].join('');

      console.log('setting cookie', cookie);

      document.cookie = cookie;
    }
  };

  // Expose ENSCookie to Bootstrapper
  Bootstrapper.ENSCookie = ENSCookie;

  function styleNodeAndChildren (node) {
    // Find every dom node inside the node
    var childNodes = node.getElementsByTagName('*'),
        childNode,
        childStyle,
        i = 0,
        len = childNodes.length + 1;

    // Fallback styles for each node
    for (; i < len; i++) {
      childNode = childNodes[i] || node;
      childStyle = childNode.style;

      childStyle.fontSize = childStyle.fontSize || 'inherit';
      childStyle.fontWeight = childStyle.fontWeight || 'inherit';
      childStyle.fontFamily = childStyle.fontFamily || 'inherit';
      childStyle.lineHeight = childStyle.lineHeight || 'inherit';
      childStyle.textTransform = childStyle.textTransform || 'inherit';
      childStyle.textAlign = childStyle.textAlign || 'inherit';
      childStyle.color = childStyle.color || 'inherit';

      childStyle.height = childStyle.height || 'auto';
      childStyle.width = childStyle.width || 'auto';
      childStyle.margin = childStyle.margin || '0';
      childStyle.padding = childStyle.padding || '0';
    }
  }

  // Create ENSDialog object
  var ENSDialog = {
    'open': function (templateObj) {

      // Render and store html from passed object (a logo location, etc)
      container.innerHTML = templateReplacer(contentHtml, templateObj);

      // Append the modal to the DOM
      document.getElementsByTagName('body')[0].appendChild(outerOverlay);
      document.body.appendChild(container);

      // Bind handlers
      outerOverlay.onclick = function () {
        // Shrink the dialog
        ENSDialog.shrink();
      };
      document.getElementById('ENS_dialog_close').onclick = function () {
        // Shrink the dialog
        ENSDialog.shrink();
      };
      document.getElementById('ENS_dialog_btn_consent').onclick = function () {
        // Set cookie with isConsenting = true
        ENSCookie.save(true);

        // Shrink the dialog
        ENSDialog.shrink();
      };
      document.getElementById('ENS_dialog_btn_notConsent').onclick = function () {
        // Set cookie with isConsenting = false
        ENSCookie.save(false);

        // Shrink the dialog
        ENSDialog.shrink();
      };
      document.getElementById('ENS_dialog_cookies').onclick = function (evt) {
        // Prevent default action
        evt.preventDefault();

        // Read all cookies
        CookieReader.readAll();

        // TODO: populate new dialog with cookie listing, css3 transition to said dialog
      };

      // Style the container and its children
      styleNodeAndChildren(container);

      // Fire open event
      ENSDialog.trigger('open');
    },
    'close': function () {
      var body = document.body;

      // Fire close event
      ENSDialog.trigger('close');

      // Remove the overlays from the DOM
      body.removeChild(outerOverlay);
      body.removeChild(container);
    },
    'shrink': function () {
      var body = document.body;

      ENSDialog.close();

      ENSDialog.trigger('shrink');

      // Append the mini overlay
      body.appendChild(miniOverlay);

      // Style the container and its children
      styleNodeAndChildren(miniOverlay);

      document.getElementById('ENS_mini_settingsBtn').onclick = function () { ENSDialog.expand(); };

      document.getElementById('ENS_mini_close').onclick = function () {
        body.removeChild(miniOverlay);
      };
    },
    'expand': function () {
      var body = document.body;

      // Remove the mini overlay
      body.removeChild(miniOverlay);

      ENSDialog.trigger('expand');

      ENSDialog.open();
    }
  };

  // Mixin the MicroEvent
  MicroEvent.mixin(ENSDialog);

  // Show shrunken dialog
  ENSDialog.open();
  ENSDialog.shrink();

  // Expose the ENSDialog to the Ensighten scope
  Bootstrapper.ENSDialog = ENSDialog;
}());