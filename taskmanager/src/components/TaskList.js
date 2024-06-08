import React from 'react';
import { Table } from 'react-bootstrap';
import TaskItem from './TaskItem';

export default function TaskList(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map(task => (
          <TaskItem key={task._id} task={task} deleteTasks={props.deleteTasks} />
        ))}
      </tbody>
    </Table>
  );
}