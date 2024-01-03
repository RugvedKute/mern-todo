import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Description"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add Todos
      </button>
    </div>
  );
}
