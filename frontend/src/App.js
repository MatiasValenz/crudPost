import React, { Fragment, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";

import TablePost from "./components/TablePost";
import FormPost from "./components/FormPost";
import FilterPost from "./components/FilterPost";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (error) {
    return (
      <Container>
        <Row>
          <Col className="mt-5">
            <Alert color="danger">error: {error}</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md="12" className="mt-5">
            <FormPost />
          </Col>
          <Col className="mt-5">
            <FilterPost />
          </Col>
          <Col md="12" className="mt-5 mb-5">
            <TablePost />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
