do ->
  html = """
      <style>
      html, body {
        min-height: 100%;
      }
      #ENS_overlay {
        z-index: 9001;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #FFF;
        background-color: rgba(255,255,255,0.3);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4cffffff', endColorstr='#4cffffff',GradientType=0);
        zoom: 1;
      }
      #ENS_dialog {
        z-index: 9002;
        position: fixed;
        top: 100px; left: 50%;
        width: 487px;
        margin: 0 0 0 -244px;
        background-color: #F7F7F7;
        font-family: Calibri, Arial, sans-serif;
        border: 1px solid #DDD;
      }
      #ENS_dialog_content {
        padding: 24px 36px 0 36px;
      }
      #ENS_dialog_close {
        cursor: pointer;
        position: absolute;
        top: 2px;
        right: 9px;
        color: #B9B9B9;
      }
      #ENS_dialog_content h1 {
        margin: 5px 0;
        text-align: center;
        font-size: 21px;
        font-family: Calibri, Arial, sans-serif;
      }
      #ENS_dialog_content hr {
        width: 100%;
        border: 0;
        border-top: 1px #656565 solid;
        height: 18px;
        display: block;
      }
      #ENS_dialog_text {
        padding: 0 16px;
        margin: 0 0 15px;
      }
      #ENS_dialog_text p {
        font-size: 12px;
        color: #373737;
        padding: 8px 0 3px;
      }
      #ENS_dialog_buttons {
        text-align: center;
        margin: 0 0 15px;
      }
      #ENS_dialog_btn_notConsent {
        display: inline-block;
        cursor: pointer;
        width: 120px;
        padding: 6px 0;
        margin: 0 3px;
        color: #AAA;
        border-radius: 3px;
        background: #e8e8e8;
        font-family: Calibri, Arial, sans-serif;
        font-size: 16px;
        border: 0;
      }
      #ENS_dialog_btn_consent {
        display: inline-block;
        cursor: pointer;
        width: 120px;
        padding: 6px 0;
        margin: 0 3px;
        color: #4F93CC;
        border-radius: 3px;
        background: #e3f3fe;
        font-family: Calibri, Arial, sans-serif;
        font-size: 16px;
        border: 0;
      }
      #ENS_dialog_info {
        color: #808080;
        margin: 0 0 16px;
      }
      #ENS_dialog_info div {
        font-size: 12px;
        text-align: center;
        margin: 4px 0;
      }
      #ENS_dialog_info a {
        color: #4F93CC;
      }
      #ENS_dialog_footer {
        background: #FFF;
        height: 36px;
      }
      #ENS_dialog_footer img {
        float: right;
        margin: 0 16px 0 0;
      }
      #ENS_mini {
        z-index: 9002;
        position: fixed;
        bottom: 20px; right: 25px;
        width: 170px;
        margin: 0;
        padding: 10px 12px 10px 10px;
        opacity: 0.7;
        background-color: #F7F7F7;
        border: 1px solid #222;
        font-family: Calibri, Arial, sans-serif;
      }
      #ENS_mini_close {
        cursor: pointer;
        position: absolute;
        z-index: 9003;
        top: 3px;
        right: 8px;
        color: #BBB;
      }
      #ENS_mini_settingsBtn {
        cursor: pointer;
        margin: 0;
        font-size: 14px;
      }
    </style>
    <div id="ENS_overlay" onclick="Bootstrapper.privacyDialog.shrink();"></div>
    <div id="ENS_dialog" onclick="return false;">
      <div id="ENS_dialog_content">
        <span id="ENS_dialog_close"
          onclick="return Bootstrapper.privacyDialog.shrink();">&#10006;</span>
        <h1>Consumer Data Collection Consent</h1>
        <hr>
        <div id="ENS_dialog_text">
          <p>
            This site uses cookies and other technologies to recognize your
            computer so we can customize and enhance your experience.
            We also work with other companies that use these technologies
            to customize the ads that you see here and on other sites.
          </p>
          <p>
            Without your consent, you will not have the best experience on
            this site, and you will see less relevant advertising.
          </p>
        </div>
        <div id="ENS_dialog_buttons">
          <button id="ENS_dialog_btn_notConsent"
            onclick="Bootstrapper.privacyDialog.setFalse()">I Do Not Consent</button>
          <button id="ENS_dialog_btn_consent"
            onclick="Bootstrapper.privacyDialog.setTrue()">I Consent</button>
        </div>
        <div id="ENS_dialog_info">
          <div>
            The privacy overlay and button can be customized
            to integrate cleanly with your sites.
          </div>
        </div>
      </div>
      <div id="ENS_dialog_footer">
        <img src="powered_by_logo.jpg" alt="powered by Ensighten privacy">
      </div>
    </div>
    <div id="ENS_mini" onclick="Bootstrapper.privacyDialog.expand()">
      <span id="ENS_mini_close"
        onclick="Bootstrapper.privacyDialog.close();">&#10006;</span>
      <p id="ENS_mini_settingsBtn">Change Privacy Settings</p>
    </div>
  """
  Bootstrapper = window.Bootstrapper || {}
  window.Bootstrapper = Bootstrapper
  container = document.createElement 'div'
  document.body.appendChild container
  container.innerHTML = html
  overlay = document.getElementById 'ENS_overlay'
  dialog = document.getElementById 'ENS_dialog'
  mini = document.getElementById 'ENS_mini'
  closed = false
  Bootstrapper.privacyDialog =
    expand: ->
      if !closed
        container.appendChild overlay
        container.appendChild dialog
        container.removeChild mini
    setTrue: ->
      document.cookie = 'ENSIGHTEN_PRIVACY_OPTIN=1; path=/; expires=' +
        do (new Date 45e11).toUTCString
      do this.shrink
    setFalse: ->
      document.cookie = 'ENSIGHTEN_PRIVACY_OPTIN=0; path=/; expires=' +
        do (new Date 45e11).toUTCString
      do this.shrink
    shrink: ->
      container.removeChild overlay
      container.removeChild dialog
      container.appendChild mini
    close: ->
      container.removeChild mini
      closed = true
  do Bootstrapper.privacyDialog.shrink