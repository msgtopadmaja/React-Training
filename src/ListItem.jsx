import React, { useContext } from "react";
import FormButtons from "./FormButtons";
import UserContext from "./Store";

const ListItem = () => {
  const { data, handleDelete, handleEdit } = useContext(UserContext);
  console.log(data, "listitem");

  const sortedData = data.slice().sort((a, b) => a.id - b.id);
  console.log(sortedData, "sorted Array");

  return (
    <div>
      {sortedData.map((user, index) => (
        <div className="list-items" key={`${user.id}-${index}`}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <FormButtons
            onEdit={() => handleEdit(user.id)}
            onDelete={() => handleDelete(user.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ListItem;
