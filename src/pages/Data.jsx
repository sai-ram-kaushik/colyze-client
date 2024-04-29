import React, { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setApplicants(res.data));
  }, []);
  return (
    <div>
      {console.log(applicants.body)}
    </div>
  );
};

export default Data;
