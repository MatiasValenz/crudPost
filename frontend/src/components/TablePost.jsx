import React, { Fragment } from "react";
import { FaTrash } from "react-icons/fa";
import { Table, Button, Card, CardBody, CardTitle } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

const TablePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.filteredPosts);

  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Posts list</CardTitle>
          <Table hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Acction</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{post.name}</td>
                  <td>{post.description}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default TablePost;
