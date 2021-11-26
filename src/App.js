import React, { useState } from "react";

import "./App.css";
import List from "./components/List/List.jsx";
import Addtask from "./components/AddTask/Addtask";

function App() {
  const [tasks, setTasks] = useState({ tareas: [] });
  const [repetidos, setRepetidos] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
    let repetido = 0;
    if (tasks.tareas.length <= 0) {
      setTasks({ tareas: [...tasks.tareas.concat(data)] });
    } else {
      repetido = tasks.tareas.includes(data);
      console.log("repetido", repetido);
      if (repetido) {
        console.log("valor repetido");
        setRepetidos(true);
      } else {
        setTasks({ tareas: [...tasks.tareas.concat(data)] });
        setRepetidos(false);
      }
    }
  };
  // Recibir el valor de el task a borrar por prop y sacarlo del array del state para volver a mostrar los task que quedan.
  const handleDelete = (data) => {
    for (var i = 0; i < tasks.tareas.length; i++) {
      if (tasks.tareas[i] === data) {
        tasks.tareas.splice(i, 1);
      }
    }
    console.log(tasks.tareas);
  };
  return (
    <div className="App">
      <Addtask submiter={handleSubmit} />
      <List
        tasklist={tasks.tareas}
        handleDelete={handleDelete}
        repetido={repetidos}
      />
    </div>
  );
}

export default App;
