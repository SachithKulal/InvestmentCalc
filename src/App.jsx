import React, { useState } from "react";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { UserInput } from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput inputChange={handleInputChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter a valid duration (at least 1 year).
        </p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
