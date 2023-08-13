import React from "react";
import { StartupPointContext } from "./context/StartupPoints";

function App(): React.ReactNode {
  const { startupPoints } = React.useContext(StartupPointContext);
  return (
    <>
      <p>Hello world: {JSON.stringify(startupPoints)}</p>
    </>
  );
}

export default App;
