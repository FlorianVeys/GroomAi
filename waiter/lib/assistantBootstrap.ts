const assistantBootstrapId = "groom-assistant";
const assistantBootstrapUrl = "http://localhost:3000/groom-assistant.js";

export function bootstrapAssistant() {
  const div = document.createElement("div");
  div.id = assistantBootstrapId;

  // Create the script element
  var script = document.createElement("script");
  script.type = "module";
  script.src = assistantBootstrapUrl;

  // Append the div and script elements to the body
  document.body.appendChild(div);
  document.body.appendChild(script);
}
