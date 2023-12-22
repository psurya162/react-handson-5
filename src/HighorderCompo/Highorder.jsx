import React, { useState } from "react";

const HighOrder = (OriginalCompo) => {
  const NewComponent = () => {
    const [count, setcount] = useState(0);
    const increment = () => {
      setcount(count + 1);
    };
    return <OriginalCompo count={count} increment={increment} />;
  };
  return NewComponent;

 
};

export default HighOrder;
