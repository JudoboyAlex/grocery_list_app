import React, { useState } from 'react';

const ListItem = ({category, value}) => {


  const [qty, updateQty] = useState(1);

  return (
    <li className={category}>
      <button onClick={() => { if (qty > 0) { updateQty(qty - 1)}}}>-</button>
        <span>{qty} {value}</span>
      <button onClick={() => updateQty(qty + 1)}>+</button>
    </li>
  );

};
 
export default ListItem;