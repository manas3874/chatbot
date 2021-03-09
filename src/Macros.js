import React, { useEffect } from "react";
import axios from "axios";
function Macros(props) {
  console.log(props);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(res.data.slice(0, 5));
        props.setState((state) => ({ ...state, todos: res.data.slice(0, 5) }));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {props.todos?.map((item) => (
        <p>{item.title}</p>
      ))}
      {/* <p>Hello macros</p> */}
    </div>
  );
}

export default Macros;
