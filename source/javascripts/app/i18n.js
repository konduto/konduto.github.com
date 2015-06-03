$(function() {
  var lang, locale;
  if (location.pathname === "/") {
    lang = navigator.languages ? navigator.languages[0] : navigator.language ||
      navigator.userLanguage;
    locale = lang.substring(0, 2);
    if ($.inArray(locale,["pt","en"]) === -1) {
      locale = "pt";
    }
    return window.location.replace(
      "http://" + window.location.host + "/" + locale + window.location.hash);
  }
});