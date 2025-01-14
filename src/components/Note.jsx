import React from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id); // Call the delete function with the note's id
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
