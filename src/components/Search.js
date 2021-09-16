import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Search = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("useEffect called again");
    const term = props.selectedDog.breed;
    console.log(props.selectedDog);
    console.log(props.selectedDog.breed);
    console.log("term", term);
    const searchAsync = async () => {
      console.log(
        `asysnc search run again with search term ${props.selectedDog.breed}`
      );
      let { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
      console.log(data.query.searchults);
    };

    searchAsync();
  }, [props.selectedDog]);

  ///////////////////////////////////////////////////////////////////////////

  const renderedResults = results.map((result) => {
    console.log(result);
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div style={{ color: "white" }} className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        gridColumn: "1/span 3",
        gridRow: "3/span 1",
        marginBottom: "10px",
      }}
    >
      <div className="ui form">
        <div className="field">
          <button>{`See below to learn more about ${props.selectedDog.breed}s!`}</button>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
