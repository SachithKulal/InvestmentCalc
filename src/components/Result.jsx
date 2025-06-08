import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export const Result = ({ input }) => {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data, index) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const totalInvestment = data.valueEndOfYear - data.interest;
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
