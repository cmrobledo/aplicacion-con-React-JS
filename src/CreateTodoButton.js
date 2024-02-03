import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("le diste click");
      }}
    >
      +
    </button>
  );
};
