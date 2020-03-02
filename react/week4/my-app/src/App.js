import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./components/User";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const { setUsers } = useContext(UserContext);

  let fetchUrl = `https://api.github.com/search/users?q=${query}`;

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(fetchUrl).then(response => {
        return response.json();
      });
      if (result.message) {
        if (result.code !== "missing") {
        } else console.log("Error: ", result.message);
      } else {
        setUserInfo(result);
      }
    };
    getData();
  }, [fetchUrl]);

  const handleSearch = event => {
    setQuery(event.target.value);
    setUserInfo([]);
  };

  return (
    <div className="App">
      <h1>Github User Searcher</h1>
      <input
        id="query"
        placeholder="Search for user"
        value={query}
        onChange={handleSearch}
      />
      <div className="display-list">
        {query
          ? userInfo
            ? userInfo.items
              ? userInfo.items.map((element, id) => {
                  return <p key={id}>{element.login}</p>;
                })
              : "loading"
            : null
          : "No result"}
      </div>
      {setUsers(userInfo.items)}
    </div>
  );
}
