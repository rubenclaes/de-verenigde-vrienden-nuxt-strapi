window.fbAsyncInit = function() {
  FB.init({
    appId: '404655223227245',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v4.0'
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/nl_BE/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
