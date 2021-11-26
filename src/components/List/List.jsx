import React from "react";
import Item from "../Item/Item";

const List = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e);
    props.handleDelete(e.nativeEvent.path[2].id);
  };

  const handleComplete = (e) => {
    const target = e.nativeEvent.path[2];

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
        })}
      </ul>
      {props.repetido ? <div>Esa tarea ya esta cargada.</div> : null}
      {props.vacio ? <div>Ingrese una tarea porfavor.</div> : null}
    </>
  );
};

export default List;
