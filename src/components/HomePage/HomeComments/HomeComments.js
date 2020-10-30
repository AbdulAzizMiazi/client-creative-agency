import React, { useState } from "react";
import { useEffect } from "react";
import CommentsCard from "./CommentsCard";
import "./HomeComments.css";

const HomeComments = () => {
  const [allComment, setComments] = useState([]);
  useEffect(() => {
    fetch("https://blooming-headland-33626.herokuapp.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div className="container mb-5">
        <h2 className="commentDiv-heading">
            Clients <span style={{ color: "rgba(122,178,89,1)" }}>Feedback</span>
        </h2>
        <div className="row">
            {
                allComment.map(eachComment => <CommentsCard commentInfo={eachComment} /> )
            }
        </div>
    </div>
  );
};

export default HomeComments;
