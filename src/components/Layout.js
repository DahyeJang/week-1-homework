import "../App.css";

function Layout(props) {
  return (
    <div className="App">
      <div className="Container">{props.children}</div>
    </div>
  );
}

export default Layout;
