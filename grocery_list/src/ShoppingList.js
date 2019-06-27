import React from 'react';
import ListItem from './ListItem'

const ShoppingList = () => {
    return (

      <ul id="shoppingList" className="shoppinglist">
      <ListItem category="meat" value="Steaks" />
      <ListItem category="prod" value="Apples" />
      <ListItem category="dairy" value="Milk" />
      <ListItem category="bakery" value="Baguettes" />
    </ul>


    )
  };
  
   export default ShoppingList;