import React, { useState } from "react";
import HighOrder from "./Highorder";

const HoverCompo = ({ count, increment }) => {
  return (
    <>
      <div className="hover">
        <h1>THIS IS HOVER COMPONENT</h1>
        <p>
          The HoverCompo component appears to display a count and a button.
          Instead of clicking, it increments the count when the button is
          hovered over using the onMouseOver event
        </p>
        <p>In the hover Component we reuse the logic of which we make in a high order component , and we are using the logic in the Hover Component</p>
        <h1>{count}</h1>
        <h1><button onMouseOver={increment}>hover</button></h1>
      </div>
    </>
  );
};

export default HighOrder(HoverCompo);
