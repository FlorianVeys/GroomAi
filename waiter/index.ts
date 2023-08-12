import { bootstrapAssistant } from "./lib/assistantBootstrap";

function startup() {
  const inputField = document.getElementById("inputFieldText");

  if (inputField) {
    bootstrapAssistant()
  }
}

startup();
