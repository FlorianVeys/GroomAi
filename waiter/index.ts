import { bootstrapAssistant } from "./lib/assistantBootstrap";
import { loadReactBundleIfNotExist } from "./lib/cdnReact";

function startup() {
  const inputField = document.getElementById("inputFieldText");

  if (inputField) {
    loadReactBundleIfNotExist();
    bootstrapAssistant()
  }
}

startup();
