import React from "react";

const Item = (props) => {
  return (
    <li id={props.class}>
      {props.task} <button onClick={props.deleteTask}>X</button>
    </li>
  );
};

export default Item;
