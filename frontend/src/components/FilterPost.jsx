import React from "react";

import { Input, Card, CardBody, CardTitle, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { filterPost } from "../actions/posts";

const FilterPost = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    let name = event.target.value;
    if (name === "") {
      name = "";
    }

    dispatch(filterPost(name));
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Filter Post</CardTitle>
        <Col sm={7}>
          <Input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Name post"
            onChange={handleInputChange}
          />
        </Col>
      </CardBody>
    </Card>
  );
};

export default FilterPost;
