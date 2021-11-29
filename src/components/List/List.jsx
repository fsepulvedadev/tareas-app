import React from "react";
import Item from "../Item/Item";
import { XIcon } from "@heroicons/react/solid";

const List = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e);
    props.handleDelete(e.nativeEvent.path[2].id);
  };

  const handleComplete = (e) => {
    const target = e.nativeEvent.path[2];
    console.log(e);

    const listadeclases = Object.values(target.classList);

    const finished = listadeclases.includes("grayscale");

    if (finished) {
      target.classList.remove("grayscale");
      target.classList.add("none");
    } else {
      target.classList.add("grayscale");
    }
  };

  return (
    <>
      <ul className="flex flex-col items-center justify-center w-full">
        {props.tasklist.map((task, id) => {
          if (task === null) {
            return null;
          } else {
            return (
              <Item
                id={`${id}`}
                class={`${task}`}
                key={id}
                task={task}
                deleteTask={handleDelete}
                completeTask={handleComplete}
              />
            );
          }
        })}
      </ul>
      {props.repetido ? (
        <div className="flex items-center justify-around w-full max-w-md p-2 mx-auto mt-4 text-center text-red-900 bg-red-400 rounded-2xl">
          <p>Esa tarea ya esta cargada.</p>
          <XIcon
            className="w-4 h-4 text-red-900"
            onClick={() => {
              props.handleRepetido(false);
            }}
          />
        </div>
      ) : null}

      <div className="w-full px-4 pt-16">
        {" "}
        {props.vacio ? (
          <div className="flex items-center justify-around w-full max-w-md p-2 mx-auto text-center text-yellow-500 bg-yellow-100 rounded-2xl">
            <p>Ingrese una tarea porfavor.</p>{" "}
            <XIcon
              className="w-4 h-4 text-yellow-500"
              onClick={() => {
                props.handleVacio(false);
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default List;
