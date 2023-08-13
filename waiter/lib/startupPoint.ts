import { SESSION_STARTUP_POINTS_KEY } from "../../shared/constant";
import { StartupPoint, StartupPointElement } from "../../shared/type/StartupPoint";

export function loadStartupPointFromWS(): StartupPoint[] {
  // Fake data should be fetch from web service in the future
  return [
    {
      type: "input",
      identifier: {
        type: "id",
        value: "inputFieldText",
      },
      actions: [
        {
          type: "translate",
          arguments: {},
        },
      ],
    },
  ];
}

export function searchStartupPointInDOM(
  startupPoints: StartupPoint[],
): StartupPointElement[] {
  const startupPointsElement: StartupPointElement[] = [];

  startupPoints.forEach((startupPoint) => {
    if (startupPoint.identifier.type === "id") {
      const element = document.getElementById(startupPoint.identifier.value);
      if (element) {
        startupPointsElement.push({
          ...startupPoint,
          element,
        });
      }
    }
  });

  return startupPointsElement;
}

export function loadStartupPointsInSessionStorage(
  startupPoints: StartupPointElement[],
) {
  sessionStorage.setItem(
    SESSION_STARTUP_POINTS_KEY,
    JSON.stringify(
      startupPoints.map((p) => {
        return {
          ...p,
          element: undefined,
        };
      }),
    ),
  );
}
