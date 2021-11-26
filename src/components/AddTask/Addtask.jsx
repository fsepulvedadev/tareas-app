import React from "react";

const Addtask = (props) => {
  const handleSubmitLocal = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (e.target[0].value === "" || e.target[0].value == null) {
      props.vacio(true);
      return;
    } else {
      props.submiter(e.target[0].value);
      props.vacio(false);
    }

    const input = document.getElementById("addtaskinput");
    input.value = "";
  };
  return (
    <>
      <form className="w-5/6 pt-6" onSubmit={handleSubmitLocal}>
        <div className="flex items-center justify-center w-full mb-3">
          <input
            className="w-5/6 p-1 bg-indigo-200 border rounded outline-none"
            id="addtaskinput"
            type="text"
          />
          <button className="p-1 ml-2 font-bold text-indigo-500 bg-indigo-200 rounded">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Addtask;
