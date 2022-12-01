import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
    {
      id: 2,
      title: "자바스크립트 공부하기",
      body: "자바스크립트 기초를 공부해봅시다",
      isDone: false,
    },
  ]);

  //제목과 내용을 담을 useState를 만든다
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //todo 완료 및 취소 기능(isdone을 true,true면 false로 바꾸기)
  const onChangeHandler = (id) => {
    // 첫번째 방법 : setTodo에 다 넣어주기
    // setTodo((todo) =>
    //   todo.map(
    //     (todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    //     // 아이디가 다르면 그대로 유지 : todo
    //     // 같으면 {} 실행. todo를 다 가져오고 isDone을 false로
    //   )
    // );

    // 두번째 방법 : 변수를 하나 만들고 그것을 setTodo에 넣어주기
    const updateTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodo(updateTodo);
  };

  //todo를 추가해주는 함수
  const onSubmitHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false,
    };

    //todo 전체와 위에서 추가한 newToto를 setTodo로 저장한다
    setTodo([...todo, newTodo]);

    //제목과 내용 input 빈값으로 바꾸기
    setTitle("");
    setBody("");
  };

  // todo를 삭제하는 함수를 만들어준다. id값을 매개변수로 하고,
  const handleDelete = (id) => {
    //새로운 유저 리스트를 만드는데, todo를 가져와 todo의 id와 가져온 매개변수의 id가 다른 리스트만
    const newTodoList = todo.filter((todo) => todo.id !== id);
    //setTodo에 넣어준다
    setTodo(newTodoList);
  };

  //완료한 todo와 완료못한 todo를 filter한다
  const todoDone = todo.filter((todo) => todo.isDone);
  const todoWork = todo.filter((todo) => !todo.isDone);

  return (
    <Layout>
      <Header />
      <AddForm
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        onSubmitHandler={onSubmitHandler}
      />
      <TodoList
        todoDone={todoDone}
        todoWork={todoWork}
        handleDelete={handleDelete}
        onChangeHandler={onChangeHandler}
      />
    </Layout>
  );
}

export default App;
