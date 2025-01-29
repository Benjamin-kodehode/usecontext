import { useContext } from "react";
import { AppContext } from "./App";
export default function MinorSection() {
  const [cart, setCart] = useContext(AppContext);
  return (
    <div>
      <p>This is product info</p>
      <button onClick={() => setCart(cart + 1)}>Add to cart</button>
    </div>
  );
}
