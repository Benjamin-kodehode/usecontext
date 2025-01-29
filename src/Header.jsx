import { useContext } from "react";
import { AppContext } from "./App";
export default function Header() {
  const [cart] = useContext(AppContext);
  return (
    <div>
      <h1>Items in Cart: {cart}</h1>
    </div>
  );
}
