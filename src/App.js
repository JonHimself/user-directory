import { useState, useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UserDirectory from "./components/UserDirectory";
import EditForm from "./components/EditForm";
import api from "./api/persons";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [persons, setPersons] = useState([]);
  // const [editBody, setEditBody] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get("/persons");
        setPersons(data);
        console.log(data);
      } catch (e) {
        if (e.response) {
          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(e.message);
        }
      }
    };
    getData();
  }, []);

  const handlePrev = (count) => {
    if (count >= 1) {
      setCount(() => count - 1);
    } else {
      return;
    }
  };

  const handleNext = (count) => {
    if (count > persons.length - 2) {
      return;
    } else {
      setCount(() => count + 1);
    }
  };

  const handleDelete = async (id) => {
    if (count > 1) {
      setCount(() => count - 1);
    } else {
      setCount(() => count + 1);
    }
    try {
      await api.delete(`/persons/${id}`);
      const personsList = persons.filter((person) => person.id !== id);
      setPersons(personsList);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
      } else {
        console.log(e.message);
      }
    }
  };

  // handleEdit = async (id) => {
  //   try {
  //     await api.put(`/persons/${id}`, editBody);
  //   } catch (e) {
  //     if (e.response) {
  //       console.log(e.response.data);
  //       console.log(e.response.status);
  //       console.log(e.response.headers);
  //     } else {
  //       console.log(e.message);
  //     }
  //   }
  // };

  return (
    <div className="App">
      <Navbar />
      {persons.length > 1 ? (
        <UserDirectory data={persons} count={count} />
      ) : (
        <div>Loading</div>
      )}
      <div className="buttons">
        <Button
          className="prev"
          onClick={() => {
            handlePrev(count);
          }}
          text="< Prev"
        ></Button>
        <div className="inner_buttons">
          <Button className="edit" text="Edit"></Button>
          <Button
            onClick={() => handleDelete(persons[count].id)}
            className="delete"
            text="Delete"
          ></Button>
          <Button className="new" text="New"></Button>
        </div>

        <Button
          className="next"
          onClick={() => {
            handleNext(count);
          }}
          text="Next >"
        ></Button>
      </div>
      <EditForm persons={persons} />
      <Form persons={persons} />
    </div>
  );
}

export default App;
