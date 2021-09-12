import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Search = ({ selectedDog }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();
  console.log(ref.current);
  useEffect(() => {
    const source = axios.CancelToken.source();

    const search = async () => {
      console.log("useEffect", term);
      let { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
          cancelToken: source.token,
        },
      });
      console.log("promise returned", data.query.search);
      setResults(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);

  ///////////////////////////////////////////////////////////////////////////

  const renderedResults = results.map((result) => {
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
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div
      ref={ref}
      style={{
        gridColumn: "1/span 3",
        gridRow: "3/span 1",
        marginBottom: "10px",
      }}
    >
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              console.log("term: ", term);
            }}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
