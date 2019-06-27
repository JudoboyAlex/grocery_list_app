import React from "react";

const NewItemForm = () => { 
  return (
    <form id="newItem" className="newitem" autoComplete="off">
      <label htmlFor="itemName" className="line-label">
        New Item
      </label>
      <div className="addnew">
        <input
          type="text"
          name="item"
          id="itemName"
          className="form-component inpt"
          placeholder="What do you need?"
        />
        
        <input type="submit" value="Add" className="form-component btn" />
      </div>
    </form>
  );
};

export default NewItemForm;

