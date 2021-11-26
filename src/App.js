import React, { useState } from "react";
import "./index.css";
import List from "./components/List/List.jsx";
import Addtask from "./components/AddTask/Addtask";

function App() {
  const [tasks, setTasks] = useState({ tareas: [] });
  const [repetidos, setRepetidos] = useState(false);
  const [vacio, setVacio] = useState(false);

  const handleVacio = (vacio) => {
    if (vacio) {
      setVacio(true);
      return;
    } else {
      setVacio(false);
    }
  };

  const handleSubmit = (data) => {
    let repetido = 0;
    if (tasks.tareas.length <= 0) {
      setTasks({ tareas: [...tasks.tareas.concat(data)] });
    } else {
      repetido = tasks.tareas.includes(data);
      if (repetido) {
        console.log("valor repetido");
        setRepetidos(true);
      } else {
        setTasks({ tareas: [...tasks.tareas.concat(data)] });
        setRepetidos(false);
      }
    }
  };
  const handleDelete = (data) => {
    for (var i = 0; i < tasks.tareas.length; i++) {
      if (tasks.tareas[i] === data) {
        tasks.tareas.splice(i, 1);
        setTasks({ tareas: tasks.tareas });

        return;
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h1 className="my-6 text-4xl">📖 Tareas App </h1>

        <div className="flex flex-col items-center justify-start w-full p-3 font-sans bg-blue-500 md:rounded md:w-2/6 min-h-300 md:mt-8">
          <Addtask submiter={handleSubmit} vacio={handleVacio} />
          <List
            tasklist={tasks.tareas}
            handleDelete={handleDelete}
            repetido={repetidos}
            vacio={vacio}
          />
        </div>
      </div>
      <footer className="flex self-end justify-center w-full mt-5 justify-self-center">
        {" "}
        <p className="mr-1">Creado por </p> {"  "}
        <a
          className="font-bold text-blue-500"
          href="https://github.com/panchixnrc"
        >
          {" "}
          Fsepulveda
        </a>{" "}
      </footer>
    </>
  );
}

export default App;
