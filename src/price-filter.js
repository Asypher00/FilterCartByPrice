import { React, useState } from "react";
export default function PriceFilter({ wearables, setWearables }) {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);
  // const displayData = () => {
  //   setWearables((prev) =>
  //     prev.filter((e) => e.price >= lowerLimit && e.price < upperLimit)
  //   );
  // };
  return (
    <div>
      <input
        style={{ textAlign: "center" }}
        onChange={(e) => setLowerLimit(e.target.value)}
        type="number"
        placeholder="Lower Limit"
        value={lowerLimit}
      ></input>{" "}
      <input
        style={{ textAlign: "center" }}
        onChange={(e) => setUpperLimit(e.target.value)}
        type="number"
        placeholder="Upper Limit"
        value={upperLimit}
      ></input>
      <div>
        {wearables.map((e) => {
          if (e.price <= upperLimit && e.price >= lowerLimit) {
            return (
              <div key={e.id}>
                <p>
                  {e.item} {e.price}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
