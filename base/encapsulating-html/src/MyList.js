import * as React from "react";

export default ({ items }) => (
  <ul>
    <h1>MyList</h1>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);
