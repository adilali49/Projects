import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState("");
  const [message, setMessage] = useState("");

  const calcBMI = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please Enter the valid value of Weight or Height");
    } else {
      let BMI = (Number(weight) / (Number(height) ** 2)) * 703;
      setBMI(BMI.toFixed(1));

      if (BMI < 25) {
        setMessage("You are underweight :(");
      } else if (BMI >= 25 && BMI <= 30) {
        setMessage("You are a healthy person :)");
      } else {
        setMessage("You are overweight :(");
      }
    }
  };

  const reloadHandler = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="form-container">
        <form>
          <h1>BMI Calculator</h1>
          <label>Weight (poundes)</label>
          <input
            type="text"
            placeholder="Enter Weight Value"
            value={weight}
            className="weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Height (inches)</label>
          <input
            type="text"
            placeholder="Enter Height Value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="height"
          />
          <button className="submit" onClick={calcBMI}>
            Submit
          </button>
          <button className="reload" onClick={reloadHandler}>
            Reload
          </button>
          <h2>Your BMI is: {BMI}</h2>
          <h3>{message}</h3>
        </form>
      </div>
    </div>
  );
};

export default App;
