import React, { useEffect } from "react";
import Moment from "react-moment";
import "./styles.css";
import Axios from "axios";

export default function App() {
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos/").then(
      ({ data }) => {
        data.map((item) => {
          console.log(item);
        });
      }
    );
  }, []);
  return (
    <div className="App">
      <h1>
        <Moment locale="id_ID" format="DD MMMM YYYY">
          2020-01-01
        </Moment>
      </h1>
      <h2>Febriyan adji saputro keren</h2>
    </div>
  );
}
