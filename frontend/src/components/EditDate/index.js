import React from 'react'

import { useParams } from "react-router-dom";

import Container from '../Container';
import Loading from '../Loading';
import Form from '../Form';

function EditDate({ dates, handleEdit, message }) {
  let { topicId } = useParams();

  const isLoading = dates.length === 0;
  const data = dates.filter(date => date._id === topicId)[0];


  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <Container>
          <Form
            type="edit"
            data={data}
            dates={dates}
            handleEdit={handleEdit}
            slug={topicId}
            message={message}
          />
        </Container>
      </>
    )
  }
}

export default EditDate;
