import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem/SearchItem";
import axios from "axios";
import "./searching.css";
import searchVector from "./SearchVector.png";
import Cookies from "js-cookie";

function Searching({ handleClick }) {
  const [innerHeight, setInnerHeight] = useState("50vh");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  let session_id = Cookies.get("session_id");

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilteredData(data);
      return;
    }
    const newData = data.filter((val) =>
      val.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(newData);
  };

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setInnerHeight(() => (900 / 1400) * 100 + "vh");
    });

    Cookies.get("user_session_id");
    const fetchData = async () => {
      const result = await axios("http://localhost:8303/user/List", {
        headers: {
          session_id: session_id,
          "Content-Type": "application/json",
        },
      });
      setData(result.data);
      setFilteredData(result.data);
    };
    fetchData();
  }, [session_id]);

  return (
    <div className="searchArea">
      <div className="usersList">
        <div className="searchRow">
          <img src={searchVector} alt="searchIcon" />
          <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={handleChange}
          />
        </div>
        <div className="showSearchResult" style={{ height: innerHeight }}>
          {
            // eslint-disable-next-line array-callback-return
            filteredData &&
              filteredData.map((val, key) => (
                <SearchItem
                  massagedUser={val}
                  key={key}
                  handleClick={handleClick}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Searching;
