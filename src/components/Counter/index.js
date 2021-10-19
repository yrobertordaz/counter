import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import List from "./components/List";


const Counter = () => {
  const [counter, setCounter] = useState({ loading: false, items: [0] });

  return (
    <div>
      <h1>Counter</h1>
      <div className="container">
        <Buttons 
          up={() =>
            setCounter({
              loading: false,
              items: [
                ...counter.items,
                counter.items[counter.items.length - 1] + 1,
              ],
            })
          }
          down={() =>
            setCounter({
              loading: false,
              items: [
                ...counter.items,
                counter.items[counter.items.length - 1] - 1,
              ],
            })
          }
        />
        <List numbers={counter.items} loading={false} />
      </div>
  
    </div>
  );
};

export default Counter;
