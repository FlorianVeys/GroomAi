import React from "react";
import ReactDOM from "react-dom/client";
import { SESSION_STARTUP_POINTS_KEY } from "../../shared/constant.ts";
import { z } from "zod";
import { StartupPoint$ } from "../../shared/type/StartupPoint.ts";
import { AssistantMenu } from "./components/AssistantMenu.tsx";
import "./main.css";

let hasStarted = false;
function startup() {
  if (hasStarted) {
    return;
  }

  const startupPointsFromSession = sessionStorage.getItem(
    SESSION_STARTUP_POINTS_KEY,
  );

  if (startupPointsFromSession) {
    const startupPointsParsed = z
      .array(StartupPoint$)
      .safeParse(JSON.parse(startupPointsFromSession));

    if (startupPointsParsed.success) {
      const startupPoints = startupPointsParsed.data;

      startupPoints.forEach((startupPoint, index) => {
        let subject;
        if (startupPoint.identifier.type === "id") {
          subject = document.getElementById(startupPoint.identifier.value);
        }

        if (subject) {
          const assistantWrapperId = `assistant-${index}`;

          const wrapper = document.createElement("div");
          wrapper.id = assistantWrapperId;
          wrapper.className = "assistant-wrapper";

          const assistant = document.createElement("div");
          assistant.className = "assistant-position-right";

          subject.parentNode?.insertBefore(wrapper, subject);
          wrapper.appendChild(subject);
          wrapper.appendChild(assistant);

          ReactDOM.createRoot(assistant).render(
            <React.StrictMode>
              <AssistantMenu></AssistantMenu>
            </React.StrictMode>,
          );
        }
      });
    }
  }

  hasStarted = true;
}

startup();
