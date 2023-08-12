import { bootstrapAssistant } from "./lib/assistantBootstrap";
import {
  loadStartupPointFromWS,
  loadStartupPointsInSessionStorage,
  searchStartupPointInDOM,
} from "./lib/startupPoint";

function startup() {
  const startupPoints = loadStartupPointFromWS();
  if (startupPoints.length) {
    const elements = searchStartupPointInDOM(startupPoints);

    if (elements.length) {
      loadStartupPointsInSessionStorage(elements);
      bootstrapAssistant();
    }
  }
}

startup();
