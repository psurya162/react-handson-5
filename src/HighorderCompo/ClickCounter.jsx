import React, { useState } from "react";
import HighOrder from "./Highorder";

const ClickCounter = ({ count, increment }) => {
  return (
    <>
      <div className="High1">
        <h1>HIGH ORDER COMPONENTS (HOCS)</h1>
        <p>
          Basically we are using a higher-order component (HOC) with React. The
          HighOrder component is likely enhancing the functionality of
          ClickCounter by passing props or additional functionality to it.
        </p>
        <p>
          High Order Component are used to reuse component logic, provide
          additional props, or perform actions before rendering. They take a
          component and return a new enhanced component
        </p>
        <h1>{count}</h1>
        <h1><button onClick={increment}>Click</button></h1>
      </div>
    </>
  );
};

export default HighOrder(ClickCounter);
