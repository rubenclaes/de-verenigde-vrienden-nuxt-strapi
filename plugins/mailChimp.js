/* setupMailchimpPopup() {
    var mailchimpConfig = {
      baseUrl: 'mc.us3.list-manage.com',
      uuid: '3eec687836a96a8b1daf23510',
      lid: '252e420417',
      uniqueMethods: true
    };
    // No edits below this line are required
    var chimpPopupLoader = document.createElement('script');

    chimpPopupLoader.src =
      '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js';

    chimpPopupLoader.setAttribute(
      'data-dojo-config',
      'usePlainJson: true, isDebug: false'
    );

    var s = `
          document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
          document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
          require(["mojo/signup-forms/Loader"], function (L) { 
            window._showMailchimpPopup = function() {
              L.start({baseUrl: "${mailchimpConfig.baseUrl}", uuid: "${mailchimpConfig.uuid}", lid: "${mailchimpConfig.lid}"});
            };
          });
        `;
    console.log(s);
    var chimpPopup = document.createElement('script');
    chimpPopup.appendChild(document.createTextNode(s));

    chimpPopupLoader.onload = function() {
      document.body.appendChild(chimpPopup);
    };
    document.body.appendChild(chimpPopupLoader);
  }; */
