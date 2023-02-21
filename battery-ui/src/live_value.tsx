import React from "react";
import "./App.css";

type TemperatureProps = {
  temp: number;
};

function LiveValue({ temp }: TemperatureProps): JSX.Element {
  return (
    <header className="live-value" style={{ color: temp > 80 || temp < 20 ? "red" : "green" }}>
      {`${temp.toString()}°C`}
    </header>
  );
}

export default LiveValue;
