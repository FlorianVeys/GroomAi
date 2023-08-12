const react18_2CdnUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js";

function hasCdnScriptLoadedInDOM() {
  var scripts = document.getElementsByTagName("script");

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src === react18_2CdnUrl) {
      return true;
    }
  }
  return false;
}

export function loadReactBundleIfNotExist() {
  if (!hasCdnScriptLoadedInDOM()) {
    var script = document.createElement("script");
    script.src = react18_2CdnUrl;
    document.head.appendChild(script);
  }
}
