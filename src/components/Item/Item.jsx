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
          className="rounded text-indigo-600 bg-indigo-200 m-1 py-0.5 px-1.5"
          onClick={props.deleteTask}
        >
          ❌
        </button>
        <button
          className="rounded text-indigo-600 bg-indigo-200 m-1 py-0.5 px-1.5"
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
