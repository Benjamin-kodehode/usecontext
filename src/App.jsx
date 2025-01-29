// usecontext- lar deg dele data globalt
// propdrilling- sende data med props gjennom flere "generasjoner"
// av komponenter for å nå dit den skal
// usecontext lar deg ungå propdrilling

import { createContext, useState } from "react";
import Header from "./Header.jsx";
import Mainsection from "./Mainsection.jsx";
export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState(0);
  return (
    <>
      <AppContext.Provider value={[cart, setCart]}>
        <Header />
        <Mainsection />
      </AppContext.Provider>
    </>
  );
}

export default App;
