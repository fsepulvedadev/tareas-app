import React from "react";
import Item from "../Item/Item";

const List = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.nativeEvent.path[1].id);
    props.handleDelete(e.nativeEvent.path[1].id);
  };
  return (
    <>
      <ul>
        {props.tasklist.map((task, id) => {
          return (
            <Item
              id={`${id}`}
              class={`${task}`}
              key={id}
              task={task}
              deleteTask={handleDelete}
            />
          );
        })}
      </ul>
      {props.repetido ? <div>Esa tarea ya esta cargada.</div> : null}
    </>
  );
};

export default List;
