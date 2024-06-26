import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import ToggleStatus from "./ToggleStatus";
import Form from "./Form";
import AddUser from "./AddUser";
import UserContext from "./Store";

const User = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const { handleEdit, displayForm, setDisplayForm } = useContext(UserContext);

  console.log(toggleStatus, "initial");
  const handleToggleChange = (status) => {
    console.log(status, "toggle change");
    setToggleStatus(status);
  };

  const handleAddNewUser = () => {
    setDisplayForm(true);
  };

  return (
    <>
      {displayForm && <Form setDisplayForm={setDisplayForm} />}
      <div className="user-container">
        <AddUser onClick={handleAddNewUser} />
        <ToggleStatus
          toggleStatus={toggleStatus}
          onChange={handleToggleChange}
        />
      </div>
      <div className="item-list">
        {toggleStatus ? (
          <div>
            <ListItem onEdit={handleEdit} />
          </div>
        ) : (
          <div className="toggle">Toggle is off</div>
        )}
      </div>
    </>
  );
};

export default User;
