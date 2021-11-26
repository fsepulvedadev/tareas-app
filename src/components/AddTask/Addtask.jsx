import React from "react";

const Addtask = (props) => {
  const handleSubmitLocal = (e) => {
    e.preventDefault();
    props.submiter(e.target[0].value);
  };
  return (
    <>
      <form onSubmit={handleSubmitLocal}>
        <div>
          <input type="text" />
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default Addtask;
