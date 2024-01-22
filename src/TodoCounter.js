import './TodoCounter.css'

export const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className="TodoCounter">
      Has completado {completed} de {total} TODOS
    </h1>
  );
}



