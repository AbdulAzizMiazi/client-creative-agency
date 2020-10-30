import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Review.css";

const Review = ({ userInfo }) => {
  const { email, name, image } = userInfo;
  const [comment, setComment] = useState({
    name: name,
    email: email,
    img: image,
  });
  let [success, setSuccess] = useState("");
  const updateComment = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newOrder = { ...comment };
    newOrder[name] = value;
    setComment(newOrder);
    setSuccess("");
  };
  const cleaningInput = () => {
    document.getElementById("companyName").value = "";
    document.getElementById("comment").value = "";
    const refreshComment = {...comment};
    delete refreshComment.company;
    delete refreshComment.comment;
    setComment(refreshComment);
  }

  const submitComment = () => {
      console.log(comment);
    fetch("https://blooming-headland-33626.herokuapp.com/submitComment",{
    method: 'POST',
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(comment)
    })
    .then(res => res.json())
    .then(data => console.log(data) && setSuccess("Order placed successfully...!!") && cleaningInput())
  };

  return (
    <div>
      <div className="commentDiv-headings px-5 pb-4">
        <h3>Order</h3>
        <h4>{name}</h4>
      </div>
      <div className="inputGroup">
        <p style={{color:"green"}}>{success}</p><br/>
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6">

            <Form className="p-5">
              <Form.Control name="customerName" value={name} readOnly />
              <br />
              <Form.Control name="company" type="text" id="companyName" onBlur={updateComment} />
              <br />
              <Form.Control name="comment" as="textarea" id="comment" rows="5" onBlur={updateComment} placeholder="Project Details" />
              <br />
            </Form>

            <Button variant="dark" onClick={submitComment} className="px-5 py-2 mx-5">
              Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
