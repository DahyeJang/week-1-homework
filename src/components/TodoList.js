import "../App.css";
import Card from "./Card";

function TodoList(props) {
  return (
    <div className="list-container">
      <div>
        <h2>Working..🔥</h2>
        <div className="list-wrapper">
          {props.todoWork.map((todo) => {
            return (
              <Card
                todo={todo}
                key={todo.id}
                handleDelete={props.handleDelete}
                onChangeHandler={props.onChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <div className="list-wrapper">
          {props.todoDone.map((todo) => {
            return (
              <Card
                todo={todo}
                key={todo.id}
                handleDelete={props.handleDelete}
                onChangeHandler={props.onChangeHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
