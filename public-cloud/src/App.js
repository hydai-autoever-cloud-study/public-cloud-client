import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const GetuserApi = async () => {
    try {
      const result = await axios.get("http://localhost:8080");
      // console.log(result.data);
      return await result.data;
    } catch (err) {
      return err;
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const data = await GetuserApi();
      setData(data);
    };
    getUser();
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((data, ind) => {
          return (
            <div key={ind}>
              user name : {data.username} nickname : {data.nickname}{" "}
            </div>
          );
        })}
    </div>
  );
}

export default App;
