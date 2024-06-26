import { createContext, useState } from "react";
const UserContext = createContext(undefined);

export default UserContext;
export const Store = ({ children }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "len", age: 24 },
    { id: 2, name: "Max", age: 25 },
    { id: 3, name: "John", age: 25 },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Do you want to delete the data")) {
      const deleteItem = data.filter((item) => {
        return item.id !== id;
      });
      // console.log(deleteItem, "delete item"); // return the data expect the point to the delete item
      setData(deleteItem);
    }
  };

  const handleSave = (e, obj) => {
    if (e) e.preventDefault();
    if (obj.id > data.length) {
      setData([...data, obj]);
    } else if (obj.id <= data.length) {
      const newData = data.filter((item) => item.id != obj.id);
      console.log(newData);
      setData([...newData, obj]);
    }
    console.log(obj);
    setEditId(null);
    setDisplayForm(false);
    setName("");
    setAge("");
  };

  const handleEdit = (id) => {
    const findData = data.filter((item) => {
      // console.log(item);
      return item.id === id;
    });
    // handleSave(null, findData[0]);
    setEditId(findData[0].id);
    setName(findData[0].name);
    setAge(findData[0].age);
    setDisplayForm(true);
    console.log("finddata in editing", findData);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        handleDelete,
        handleSave,
        handleEdit,
        displayForm,
        setDisplayForm,
        name,
        setName,
        age,
        setAge,
        editId,
        setEditId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
