import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function TaskItem(props) {
  const handleDelete = () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      axios.delete(`http://127.0.0.1:3060/api/tasks/${props.task._id}`)
        .then(response => {
          const result = response.data;
          props.deleteTasks(result._id);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <tr>
      <td>{props.task.title}</td>
      <td>{props.task.description}</td>
      <td>{props.task.status}</td>
      <td>{props.task.priority}</td>
      <td>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
}