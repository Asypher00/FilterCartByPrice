import "./styles.css";
import { React, useState } from "react";
import { data } from "./data";
import PriceFilter from "./price-filter";
export default function App() {
  const [wearables, setWearables] = useState(data);
  return (
    <div className="App">
      <PriceFilter wearables={wearables} setWearables={setWearables} />
    </div>
  );
}
