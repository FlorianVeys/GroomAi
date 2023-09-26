import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { StartupPoint, StartupPoint$ } from "../../../shared/type/StartupPoint";
import { z } from "zod";
import { SESSION_STARTUP_POINTS_KEY } from "../../../shared/constant";

type StartupPointState = {
  startupPoints: StartupPoint[];
};

const initialStartupPointState: StartupPointState = {
  startupPoints: [],
};

export const StartupPointContext = createContext<StartupPointState>(
  initialStartupPointState,
);

type StartupPointProviderProps = {
  children: ReactNode;
};

export const StartupPointProvider = ({
  children,
}: StartupPointProviderProps) => {
  const [{ startupPoints }, setStartupPoints] = useState<StartupPointState>(
    initialStartupPointState,
  );

  const storeStartupPoints = useCallback(
    (value: string) => {
      try {
        const startupPointsParsed = z
          .array(StartupPoint$)
          .safeParse(JSON.parse(value));

        if (startupPointsParsed.success) {
          setStartupPoints({
            startupPoints: startupPointsParsed.data,
          });
        } else {
          console.error(startupPointsParsed.error);
        }
      } catch (error: unknown) {
        console.error(error);
      }
    },
    [setStartupPoints],
  );

  useEffect(() => {
    const handleStorageChange = ({
      storageArea,
      key,
      newValue,
    }: StorageEvent) => {
      if (
        storageArea === sessionStorage &&
        key === SESSION_STARTUP_POINTS_KEY &&
        newValue
      ) {
        storeStartupPoints(newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storeStartupPoints]);

  useEffect(() => {
    const startupPointsFromSession = sessionStorage.getItem(
      SESSION_STARTUP_POINTS_KEY,
    );
    if (startupPointsFromSession) {
      storeStartupPoints(startupPointsFromSession);
    }
  }, [storeStartupPoints]);

  return (
    <StartupPointContext.Provider value={{ startupPoints }}>
      {children}
    </StartupPointContext.Provider>
  );
};

export function useStartupPoints() {
  return useContext(StartupPointContext).startupPoints;
}
