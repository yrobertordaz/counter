import React, { useEffect } from "react";
const List = ({ loading, numbers }) => {
  // ComponentDidMount

  return (
    <div>
      {loading === true && (
        <ul>
          <li>Loading...</li>
        </ul>
      )}
      {loading === false && (
        <ul>
          {numbers.map((number) => {
            return <li key={number}>{number}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default List;
