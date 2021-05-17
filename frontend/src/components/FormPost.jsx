import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Alert,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const FormPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    dispatch(createPost(data));

    e.target.reset();
    reset();
  };

  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Create Post</CardTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>Name:</Label>
              <Col sm={7}>
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Name post"
                  {...register("name", {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <Alert color="danger" className="mt-2">
                    Name is required
                  </Alert>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <Alert color="danger" className="mt-2">
                    Min length is 3
                  </Alert>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <Alert color="danger" className="mt-2">
                    Max length is 10
                  </Alert>
                )}
              </Col>
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>
              <Col sm={7}>
                <Input
                  autoComplete="off"
                  type="text"
                  name="description"
                  placeholder="Description post"
                  {...register("description", {
                    required: true,
                    maxLength: 50,
                    minLength: 5,
                  })}
                />
                {errors.description && errors.description.type === "required" && (
                  <Alert color="danger" className="mt-2">
                    Description is required
                  </Alert>
                )}
                {errors.description && errors.description.type === "minLength" && (
                  <Alert color="danger" className="mt-2">
                    Min length is 5
                  </Alert>
                )}
                {errors.description && errors.description.type === "maxLength" && (
                  <Alert color="danger" className="mt-2">
                    Max length is 50
                  </Alert>
                )}
              </Col>
            </FormGroup>
            <Row>
              <Col className="mt-2">
                <Button color="primary">Add</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default FormPost;
