import React, { useContext, useEffect } from "react";
import UserContext from "./Store";

const Form = ({ setDisplayForm }) => {
  const {
    data,
    setData,
    handleSave,
    name,
    setName,
    age,
    setAge,
    editId,
    setEditId,
  } = useContext(UserContext);

  const formSubmit = (e) => {
    if (editId === null) {
      handleSave(e, { id: data.length + 1, name: name, age: age });
    } else {
      handleSave(e, { id: editId, name: name, age: age });
    }
  };

  return (
    <div className="inputs">
      <form onSubmit={formSubmit}>
        <div className="input">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="input">
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="buttons-form">
          <button type="submit">Save</button>
          <button onClick={() => setDisplayForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
