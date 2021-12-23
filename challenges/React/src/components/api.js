import React, { useState, useEffect } from "react";
import axios from "axios";

function API() {

  const [content, setContent] = useState([]);

  // fetch data on component mount
  useEffect(() => {
    // const fetch = async () => {
    //   const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    //   setContent(data);
    // }
    // fetch().catch(err => console.error(err));

    axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
          .then(response => {
            setContent(response.data);
          })
          .catch(err => console.log(err));

  }, []);

  return (
    <div>
      <div>
        {
          content.legnth === 0 
            ? "Loading"
            : content.map((ele, idx) => {
                return (
                  <div key={idx}>
                    {ele.email} - {ele.name}
                  </div>
                );
            })
        }
      </div>
    </div>
  )
}

export default API;