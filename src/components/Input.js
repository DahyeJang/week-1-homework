import "../App.css";

function Input() {
  return (
    <div className="add-form">
      <div className="input-group">
        제목<input className="add-input"></input>
        내용<input className="add-input"></input>
      </div>
      <button className="add-button">추가하기</button>
    </div>
  );
}

export default Input;
