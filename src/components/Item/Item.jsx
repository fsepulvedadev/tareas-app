import React from "react";

const Item = (props) => {
  return (
    <li
      className="flex justify-between w-full pl-3 pr-10 my-1 text-blue-600 bg-blue-300 rounded md:px-12 md:min-w-full filter"
      id={props.class}
    >
      <p className="text-left">{props.task} </p>
      <div className="flex -mr-8">
        <button
          className="my-1 text-indigo-600 rounded filter"
          onClick={props.deleteTask}
        >
          ❌
        </button>
        <button
          className="my-1 text-indigo-600 rounded filter "
          onClick={props.completeTask}
        >
          {" "}
          ✔
        </button>
      </div>
    </li>
  );
};

export default Item;
